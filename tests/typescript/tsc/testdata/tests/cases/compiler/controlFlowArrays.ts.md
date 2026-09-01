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
        "name": "cond",
        "optional": false,
        "typeAnnotation": null,
        "start": 17,
        "end": 21
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "start": 25,
          "end": 32
        },
        "start": 23,
        "end": 32
      },
      "body": null,
      "expression": false,
      "start": 0,
      "end": 33
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 44,
        "end": 46
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
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 59,
                  "end": 60
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [],
                  "start": 63,
                  "end": 65
                },
                "definite": false,
                "start": 59,
                "end": 65
              }
            ],
            "declare": false,
            "start": 55,
            "end": 66
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 71,
                  "end": 72
                },
                "property": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 73,
                  "end": 74
                },
                "optional": false,
                "computed": true,
                "start": 71,
                "end": 75
              },
              "right": {
                "type": "Literal",
                "value": 5,
                "raw": "5",
                "start": 78,
                "end": 79
              },
              "start": 71,
              "end": 79
            },
            "directive": null,
            "start": 71,
            "end": 80
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 85,
                  "end": 86
                },
                "property": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 87,
                  "end": 88
                },
                "optional": false,
                "computed": true,
                "start": 85,
                "end": 89
              },
              "right": {
                "type": "Literal",
                "value": "hello",
                "raw": "\"hello\"",
                "start": 92,
                "end": 99
              },
              "start": 85,
              "end": 99
            },
            "directive": null,
            "start": 85,
            "end": 100
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 105,
                  "end": 106
                },
                "property": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 107,
                  "end": 108
                },
                "optional": false,
                "computed": true,
                "start": 105,
                "end": 109
              },
              "right": {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 112,
                "end": 116
              },
              "start": 105,
              "end": 116
            },
            "directive": null,
            "start": 105,
            "end": 117
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 129,
              "end": 130
            },
            "start": 122,
            "end": 131
          }
        ],
        "start": 49,
        "end": 167
      },
      "expression": false,
      "start": 35,
      "end": 167
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 178,
        "end": 180
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
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 193,
                  "end": 194
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [],
                  "start": 197,
                  "end": 199
                },
                "definite": false,
                "start": 193,
                "end": 199
              }
            ],
            "declare": false,
            "start": 189,
            "end": 200
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 205,
                  "end": 206
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 207,
                  "end": 211
                },
                "optional": false,
                "computed": false,
                "start": 205,
                "end": 211
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 5,
                  "raw": "5",
                  "start": 212,
                  "end": 213
                }
              ],
              "optional": false,
              "start": 205,
              "end": 214
            },
            "directive": null,
            "start": 205,
            "end": 215
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 220,
                  "end": 221
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 222,
                  "end": 226
                },
                "optional": false,
                "computed": false,
                "start": 220,
                "end": 226
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": "hello",
                  "raw": "\"hello\"",
                  "start": 227,
                  "end": 234
                }
              ],
              "optional": false,
              "start": 220,
              "end": 235
            },
            "directive": null,
            "start": 220,
            "end": 236
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 241,
                  "end": 242
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 243,
                  "end": 247
                },
                "optional": false,
                "computed": false,
                "start": 241,
                "end": 247
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 248,
                  "end": 252
                }
              ],
              "optional": false,
              "start": 241,
              "end": 253
            },
            "directive": null,
            "start": 241,
            "end": 254
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 266,
              "end": 267
            },
            "start": 259,
            "end": 268
          }
        ],
        "start": 183,
        "end": 304
      },
      "expression": false,
      "start": 169,
      "end": 304
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 315,
        "end": 317
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
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 330,
                  "end": 331
                },
                "init": null,
                "definite": false,
                "start": 330,
                "end": 331
              }
            ],
            "declare": false,
            "start": 326,
            "end": 332
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 337,
                "end": 338
              },
              "right": {
                "type": "ArrayExpression",
                "elements": [],
                "start": 341,
                "end": 343
              },
              "start": 337,
              "end": 343
            },
            "directive": null,
            "start": 337,
            "end": 344
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 349,
                  "end": 350
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 351,
                  "end": 355
                },
                "optional": false,
                "computed": false,
                "start": 349,
                "end": 355
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 5,
                  "raw": "5",
                  "start": 356,
                  "end": 357
                },
                {
                  "type": "Literal",
                  "value": "hello",
                  "raw": "\"hello\"",
                  "start": 359,
                  "end": 366
                }
              ],
              "optional": false,
              "start": 349,
              "end": 367
            },
            "directive": null,
            "start": 349,
            "end": 368
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 380,
              "end": 381
            },
            "start": 373,
            "end": 382
          }
        ],
        "start": 320,
        "end": 408
      },
      "expression": false,
      "start": 306,
      "end": 408
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null,
        "start": 419,
        "end": 421
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
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 434,
                  "end": 435
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [],
                  "start": 438,
                  "end": 440
                },
                "definite": false,
                "start": 434,
                "end": 440
              }
            ],
            "declare": false,
            "start": 430,
            "end": 441
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "cond",
                "optional": false,
                "typeAnnotation": null,
                "start": 450,
                "end": 454
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 450,
              "end": 456
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 468,
                        "end": 469
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "push",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 470,
                        "end": 474
                      },
                      "optional": false,
                      "computed": false,
                      "start": 468,
                      "end": 474
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": 5,
                        "raw": "5",
                        "start": 475,
                        "end": 476
                      }
                    ],
                    "optional": false,
                    "start": 468,
                    "end": 477
                  },
                  "directive": null,
                  "start": 468,
                  "end": 478
                }
              ],
              "start": 458,
              "end": 484
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 504,
                        "end": 505
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "push",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 506,
                        "end": 510
                      },
                      "optional": false,
                      "computed": false,
                      "start": 504,
                      "end": 510
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": "hello",
                        "raw": "\"hello\"",
                        "start": 511,
                        "end": 518
                      }
                    ],
                    "optional": false,
                    "start": 504,
                    "end": 519
                  },
                  "directive": null,
                  "start": 504,
                  "end": 520
                }
              ],
              "start": 494,
              "end": 526
            },
            "start": 446,
            "end": 526
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 538,
              "end": 539
            },
            "start": 531,
            "end": 540
          }
        ],
        "start": 424,
        "end": 566
      },
      "expression": false,
      "start": 410,
      "end": 566
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f5",
        "optional": false,
        "typeAnnotation": null,
        "start": 577,
        "end": 579
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
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 592,
                  "end": 593
                },
                "init": null,
                "definite": false,
                "start": 592,
                "end": 593
              }
            ],
            "declare": false,
            "start": 588,
            "end": 594
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "cond",
                "optional": false,
                "typeAnnotation": null,
                "start": 603,
                "end": 607
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 603,
              "end": 609
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 621,
                      "end": 622
                    },
                    "right": {
                      "type": "ArrayExpression",
                      "elements": [],
                      "start": 625,
                      "end": 627
                    },
                    "start": 621,
                    "end": 627
                  },
                  "directive": null,
                  "start": 621,
                  "end": 628
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
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 637,
                        "end": 638
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "push",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 639,
                        "end": 643
                      },
                      "optional": false,
                      "computed": false,
                      "start": 637,
                      "end": 643
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": 5,
                        "raw": "5",
                        "start": 644,
                        "end": 645
                      }
                    ],
                    "optional": false,
                    "start": 637,
                    "end": 646
                  },
                  "directive": null,
                  "start": 637,
                  "end": 647
                }
              ],
              "start": 611,
              "end": 653
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 673,
                      "end": 674
                    },
                    "right": {
                      "type": "ArrayExpression",
                      "elements": [],
                      "start": 677,
                      "end": 679
                    },
                    "start": 673,
                    "end": 679
                  },
                  "directive": null,
                  "start": 673,
                  "end": 680
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
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 689,
                        "end": 690
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "push",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 691,
                        "end": 695
                      },
                      "optional": false,
                      "computed": false,
                      "start": 689,
                      "end": 695
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": "hello",
                        "raw": "\"hello\"",
                        "start": 696,
                        "end": 703
                      }
                    ],
                    "optional": false,
                    "start": 689,
                    "end": 704
                  },
                  "directive": null,
                  "start": 689,
                  "end": 705
                }
              ],
              "start": 663,
              "end": 711
            },
            "start": 599,
            "end": 711
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 723,
              "end": 724
            },
            "start": 716,
            "end": 725
          }
        ],
        "start": 582,
        "end": 751
      },
      "expression": false,
      "start": 568,
      "end": 751
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f6",
        "optional": false,
        "typeAnnotation": null,
        "start": 762,
        "end": 764
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
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 777,
                  "end": 778
                },
                "init": null,
                "definite": false,
                "start": 777,
                "end": 778
              }
            ],
            "declare": false,
            "start": 773,
            "end": 779
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "cond",
                "optional": false,
                "typeAnnotation": null,
                "start": 788,
                "end": 792
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 788,
              "end": 794
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 806,
                      "end": 807
                    },
                    "right": {
                      "type": "Literal",
                      "value": 5,
                      "raw": "5",
                      "start": 810,
                      "end": 811
                    },
                    "start": 806,
                    "end": 811
                  },
                  "directive": null,
                  "start": 806,
                  "end": 812
                }
              ],
              "start": 796,
              "end": 818
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 838,
                      "end": 839
                    },
                    "right": {
                      "type": "ArrayExpression",
                      "elements": [],
                      "start": 842,
                      "end": 844
                    },
                    "start": 838,
                    "end": 844
                  },
                  "directive": null,
                  "start": 838,
                  "end": 845
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
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 854,
                        "end": 855
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "push",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 856,
                        "end": 860
                      },
                      "optional": false,
                      "computed": false,
                      "start": 854,
                      "end": 860
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": "hello",
                        "raw": "\"hello\"",
                        "start": 861,
                        "end": 868
                      }
                    ],
                    "optional": false,
                    "start": 854,
                    "end": 869
                  },
                  "directive": null,
                  "start": 854,
                  "end": 870
                }
              ],
              "start": 828,
              "end": 876
            },
            "start": 784,
            "end": 876
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 888,
              "end": 889
            },
            "start": 881,
            "end": 890
          }
        ],
        "start": 767,
        "end": 914
      },
      "expression": false,
      "start": 753,
      "end": 914
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f7",
        "optional": false,
        "typeAnnotation": null,
        "start": 925,
        "end": 927
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
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 940,
                  "end": 941
                },
                "init": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 944,
                  "end": 948
                },
                "definite": false,
                "start": 940,
                "end": 948
              }
            ],
            "declare": false,
            "start": 936,
            "end": 949
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "cond",
                "optional": false,
                "typeAnnotation": null,
                "start": 958,
                "end": 962
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 958,
              "end": 964
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 976,
                      "end": 977
                    },
                    "right": {
                      "type": "ArrayExpression",
                      "elements": [],
                      "start": 980,
                      "end": 982
                    },
                    "start": 976,
                    "end": 982
                  },
                  "directive": null,
                  "start": 976,
                  "end": 983
                },
                {
                  "type": "WhileStatement",
                  "test": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "cond",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 999,
                      "end": 1003
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 999,
                    "end": 1005
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
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1021,
                              "end": 1022
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "push",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1023,
                              "end": 1027
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1021,
                            "end": 1027
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Literal",
                              "value": "hello",
                              "raw": "\"hello\"",
                              "start": 1028,
                              "end": 1035
                            }
                          ],
                          "optional": false,
                          "start": 1021,
                          "end": 1036
                        },
                        "directive": null,
                        "start": 1021,
                        "end": 1037
                      }
                    ],
                    "start": 1007,
                    "end": 1047
                  },
                  "start": 992,
                  "end": 1047
                }
              ],
              "start": 966,
              "end": 1053
            },
            "alternate": null,
            "start": 954,
            "end": 1053
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1065,
              "end": 1066
            },
            "start": 1058,
            "end": 1067
          }
        ],
        "start": 930,
        "end": 1089
      },
      "expression": false,
      "start": 916,
      "end": 1089
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f8",
        "optional": false,
        "typeAnnotation": null,
        "start": 1100,
        "end": 1102
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
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1115,
                  "end": 1116
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [],
                  "start": 1119,
                  "end": 1121
                },
                "definite": false,
                "start": 1115,
                "end": 1121
              }
            ],
            "declare": false,
            "start": 1111,
            "end": 1122
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1127,
                  "end": 1128
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1129,
                  "end": 1133
                },
                "optional": false,
                "computed": false,
                "start": 1127,
                "end": 1133
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 5,
                  "raw": "5",
                  "start": 1134,
                  "end": 1135
                }
              ],
              "optional": false,
              "start": 1127,
              "end": 1136
            },
            "directive": null,
            "start": 1127,
            "end": 1137
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "cond",
                "optional": false,
                "typeAnnotation": null,
                "start": 1146,
                "end": 1150
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 1146,
              "end": 1152
            },
            "consequent": {
              "type": "ReturnStatement",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1161,
                "end": 1162
              },
              "start": 1154,
              "end": 1163
            },
            "alternate": null,
            "start": 1142,
            "end": 1163
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1181,
                  "end": 1182
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1183,
                  "end": 1187
                },
                "optional": false,
                "computed": false,
                "start": 1181,
                "end": 1187
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": "hello",
                  "raw": "\"hello\"",
                  "start": 1188,
                  "end": 1195
                }
              ],
              "optional": false,
              "start": 1181,
              "end": 1196
            },
            "directive": null,
            "start": 1181,
            "end": 1197
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "cond",
                "optional": false,
                "typeAnnotation": null,
                "start": 1206,
                "end": 1210
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 1206,
              "end": 1212
            },
            "consequent": {
              "type": "ReturnStatement",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1221,
                "end": 1222
              },
              "start": 1214,
              "end": 1223
            },
            "alternate": null,
            "start": 1202,
            "end": 1223
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1252,
                  "end": 1253
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1254,
                  "end": 1258
                },
                "optional": false,
                "computed": false,
                "start": 1252,
                "end": 1258
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 1259,
                  "end": 1263
                }
              ],
              "optional": false,
              "start": 1252,
              "end": 1264
            },
            "directive": null,
            "start": 1252,
            "end": 1265
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1277,
              "end": 1278
            },
            "start": 1270,
            "end": 1279
          }
        ],
        "start": 1105,
        "end": 1315
      },
      "expression": false,
      "start": 1091,
      "end": 1315
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f9",
        "optional": false,
        "typeAnnotation": null,
        "start": 1326,
        "end": 1328
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
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1341,
                  "end": 1342
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [],
                  "start": 1345,
                  "end": 1347
                },
                "definite": false,
                "start": 1341,
                "end": 1347
              }
            ],
            "declare": false,
            "start": 1337,
            "end": 1348
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "cond",
                "optional": false,
                "typeAnnotation": null,
                "start": 1357,
                "end": 1361
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 1357,
              "end": 1363
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1375,
                        "end": 1376
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "push",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1377,
                        "end": 1381
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1375,
                      "end": 1381
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": 5,
                        "raw": "5",
                        "start": 1382,
                        "end": 1383
                      }
                    ],
                    "optional": false,
                    "start": 1375,
                    "end": 1384
                  },
                  "directive": null,
                  "start": 1375,
                  "end": 1385
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1401,
                    "end": 1402
                  },
                  "start": 1394,
                  "end": 1403
                }
              ],
              "start": 1365,
              "end": 1422
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1442,
                        "end": 1443
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "push",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1444,
                        "end": 1448
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1442,
                      "end": 1448
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": "hello",
                        "raw": "\"hello\"",
                        "start": 1449,
                        "end": 1456
                      }
                    ],
                    "optional": false,
                    "start": 1442,
                    "end": 1457
                  },
                  "directive": null,
                  "start": 1442,
                  "end": 1458
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1474,
                    "end": 1475
                  },
                  "start": 1467,
                  "end": 1476
                }
              ],
              "start": 1432,
              "end": 1495
            },
            "start": 1353,
            "end": 1495
          }
        ],
        "start": 1331,
        "end": 1497
      },
      "expression": false,
      "start": 1317,
      "end": 1497
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f10",
        "optional": false,
        "typeAnnotation": null,
        "start": 1508,
        "end": 1511
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
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1524,
                  "end": 1525
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [],
                  "start": 1528,
                  "end": 1530
                },
                "definite": false,
                "start": 1524,
                "end": 1530
              }
            ],
            "declare": false,
            "start": 1520,
            "end": 1531
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "cond",
                "optional": false,
                "typeAnnotation": null,
                "start": 1540,
                "end": 1544
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 1540,
              "end": 1546
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1558,
                        "end": 1559
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "push",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1560,
                        "end": 1564
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1558,
                      "end": 1564
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": true,
                        "raw": "true",
                        "start": 1565,
                        "end": 1569
                      }
                    ],
                    "optional": false,
                    "start": 1558,
                    "end": 1570
                  },
                  "directive": null,
                  "start": 1558,
                  "end": 1571
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1580,
                    "end": 1581
                  },
                  "directive": null,
                  "start": 1580,
                  "end": 1582
                }
              ],
              "start": 1548,
              "end": 1602
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1622,
                        "end": 1623
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "push",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1624,
                        "end": 1628
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1622,
                      "end": 1628
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": 5,
                        "raw": "5",
                        "start": 1629,
                        "end": 1630
                      }
                    ],
                    "optional": false,
                    "start": 1622,
                    "end": 1631
                  },
                  "directive": null,
                  "start": 1622,
                  "end": 1632
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1641,
                    "end": 1642
                  },
                  "directive": null,
                  "start": 1641,
                  "end": 1643
                },
                {
                  "type": "WhileStatement",
                  "test": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "cond",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1672,
                      "end": 1676
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 1672,
                    "end": 1678
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
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1694,
                              "end": 1695
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "push",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1696,
                              "end": 1700
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1694,
                            "end": 1700
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Literal",
                              "value": "hello",
                              "raw": "\"hello\"",
                              "start": 1701,
                              "end": 1708
                            }
                          ],
                          "optional": false,
                          "start": 1694,
                          "end": 1709
                        },
                        "directive": null,
                        "start": 1694,
                        "end": 1710
                      }
                    ],
                    "start": 1680,
                    "end": 1720
                  },
                  "start": 1665,
                  "end": 1720
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1729,
                    "end": 1730
                  },
                  "directive": null,
                  "start": 1729,
                  "end": 1731
                }
              ],
              "start": 1612,
              "end": 1761
            },
            "start": 1536,
            "end": 1761
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1766,
                  "end": 1767
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1768,
                  "end": 1772
                },
                "optional": false,
                "computed": false,
                "start": 1766,
                "end": 1772
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 99,
                  "raw": "99",
                  "start": 1773,
                  "end": 1775
                }
              ],
              "optional": false,
              "start": 1766,
              "end": 1776
            },
            "directive": null,
            "start": 1766,
            "end": 1777
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1789,
              "end": 1790
            },
            "start": 1782,
            "end": 1791
          }
        ],
        "start": 1514,
        "end": 1827
      },
      "expression": false,
      "start": 1499,
      "end": 1827
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f11",
        "optional": false,
        "typeAnnotation": null,
        "start": 1838,
        "end": 1841
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
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1854,
                  "end": 1855
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [],
                  "start": 1858,
                  "end": 1860
                },
                "definite": false,
                "start": 1854,
                "end": 1860
              }
            ],
            "declare": false,
            "start": 1850,
            "end": 1861
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1870,
                  "end": 1871
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "length",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1872,
                  "end": 1878
                },
                "optional": false,
                "computed": false,
                "start": 1870,
                "end": 1878
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 1883,
                "end": 1884
              },
              "start": 1870,
              "end": 1884
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1930,
                        "end": 1931
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "push",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1932,
                        "end": 1936
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1930,
                      "end": 1936
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": "hello",
                        "raw": "\"hello\"",
                        "start": 1937,
                        "end": 1944
                      }
                    ],
                    "optional": false,
                    "start": 1930,
                    "end": 1945
                  },
                  "directive": null,
                  "start": 1930,
                  "end": 1946
                }
              ],
              "start": 1886,
              "end": 1952
            },
            "alternate": null,
            "start": 1866,
            "end": 1952
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1964,
              "end": 1965
            },
            "start": 1957,
            "end": 1966
          }
        ],
        "start": 1844,
        "end": 1968
      },
      "expression": false,
      "start": 1829,
      "end": 1968
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f12",
        "optional": false,
        "typeAnnotation": null,
        "start": 1979,
        "end": 1982
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
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1995,
                  "end": 1996
                },
                "init": null,
                "definite": false,
                "start": 1995,
                "end": 1996
              }
            ],
            "declare": false,
            "start": 1991,
            "end": 1997
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 2002,
                "end": 2003
              },
              "right": {
                "type": "ArrayExpression",
                "elements": [],
                "start": 2006,
                "end": 2008
              },
              "start": 2002,
              "end": 2008
            },
            "directive": null,
            "start": 2002,
            "end": 2009
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2018,
                  "end": 2019
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "length",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2020,
                  "end": 2026
                },
                "optional": false,
                "computed": false,
                "start": 2018,
                "end": 2026
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 2031,
                "end": 2032
              },
              "start": 2018,
              "end": 2032
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2078,
                        "end": 2079
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "push",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2080,
                        "end": 2084
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2078,
                      "end": 2084
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": "hello",
                        "raw": "\"hello\"",
                        "start": 2085,
                        "end": 2092
                      }
                    ],
                    "optional": false,
                    "start": 2078,
                    "end": 2093
                  },
                  "directive": null,
                  "start": 2078,
                  "end": 2094
                }
              ],
              "start": 2034,
              "end": 2100
            },
            "alternate": null,
            "start": 2014,
            "end": 2100
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 2112,
              "end": 2113
            },
            "start": 2105,
            "end": 2114
          }
        ],
        "start": 1985,
        "end": 2116
      },
      "expression": false,
      "start": 1970,
      "end": 2116
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f13",
        "optional": false,
        "typeAnnotation": null,
        "start": 2127,
        "end": 2130
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2143,
                  "end": 2144
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [],
                  "start": 2147,
                  "end": 2149
                },
                "definite": false,
                "start": 2143,
                "end": 2149
              }
            ],
            "declare": false,
            "start": 2139,
            "end": 2150
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2155,
                  "end": 2156
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2157,
                  "end": 2161
                },
                "optional": false,
                "computed": false,
                "start": 2155,
                "end": 2161
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 5,
                  "raw": "5",
                  "start": 2162,
                  "end": 2163
                }
              ],
              "optional": false,
              "start": 2155,
              "end": 2164
            },
            "directive": null,
            "start": 2155,
            "end": 2165
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2170,
                  "end": 2171
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2172,
                  "end": 2176
                },
                "optional": false,
                "computed": false,
                "start": 2170,
                "end": 2176
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": "hello",
                  "raw": "\"hello\"",
                  "start": 2177,
                  "end": 2184
                }
              ],
              "optional": false,
              "start": 2170,
              "end": 2185
            },
            "directive": null,
            "start": 2170,
            "end": 2186
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2191,
                  "end": 2192
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2193,
                  "end": 2197
                },
                "optional": false,
                "computed": false,
                "start": 2191,
                "end": 2197
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 2198,
                  "end": 2202
                }
              ],
              "optional": false,
              "start": 2191,
              "end": 2203
            },
            "directive": null,
            "start": 2191,
            "end": 2204
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 2216,
              "end": 2217
            },
            "start": 2209,
            "end": 2218
          }
        ],
        "start": 2133,
        "end": 2254
      },
      "expression": false,
      "start": 2118,
      "end": 2254
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f14",
        "optional": false,
        "typeAnnotation": null,
        "start": 2265,
        "end": 2268
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
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2283,
                  "end": 2284
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [],
                  "start": 2287,
                  "end": 2289
                },
                "definite": false,
                "start": 2283,
                "end": 2289
              }
            ],
            "declare": false,
            "start": 2277,
            "end": 2290
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2295,
                  "end": 2296
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2297,
                  "end": 2301
                },
                "optional": false,
                "computed": false,
                "start": 2295,
                "end": 2301
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 5,
                  "raw": "5",
                  "start": 2302,
                  "end": 2303
                }
              ],
              "optional": false,
              "start": 2295,
              "end": 2304
            },
            "directive": null,
            "start": 2295,
            "end": 2305
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2310,
                  "end": 2311
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2312,
                  "end": 2316
                },
                "optional": false,
                "computed": false,
                "start": 2310,
                "end": 2316
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": "hello",
                  "raw": "\"hello\"",
                  "start": 2317,
                  "end": 2324
                }
              ],
              "optional": false,
              "start": 2310,
              "end": 2325
            },
            "directive": null,
            "start": 2310,
            "end": 2326
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2331,
                  "end": 2332
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2333,
                  "end": 2337
                },
                "optional": false,
                "computed": false,
                "start": 2331,
                "end": 2337
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 2338,
                  "end": 2342
                }
              ],
              "optional": false,
              "start": 2331,
              "end": 2343
            },
            "directive": null,
            "start": 2331,
            "end": 2344
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 2356,
              "end": 2357
            },
            "start": 2349,
            "end": 2358
          }
        ],
        "start": 2271,
        "end": 2394
      },
      "expression": false,
      "start": 2256,
      "end": 2394
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f15",
        "optional": false,
        "typeAnnotation": null,
        "start": 2405,
        "end": 2408
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
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2421,
                  "end": 2422
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [],
                  "start": 2425,
                  "end": 2427
                },
                "definite": false,
                "start": 2421,
                "end": 2427
              }
            ],
            "declare": false,
            "start": 2417,
            "end": 2428
          },
          {
            "type": "WhileStatement",
            "test": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "cond",
                "optional": false,
                "typeAnnotation": null,
                "start": 2440,
                "end": 2444
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 2440,
              "end": 2446
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "WhileStatement",
                  "test": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "cond",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2465,
                      "end": 2469
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 2465,
                    "end": 2471
                  },
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 2473,
                    "end": 2475
                  },
                  "start": 2458,
                  "end": 2475
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
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2484,
                        "end": 2485
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "push",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2486,
                        "end": 2490
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2484,
                      "end": 2490
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": "hello",
                        "raw": "\"hello\"",
                        "start": 2491,
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
                }
              ],
              "start": 2448,
              "end": 2506
            },
            "start": 2433,
            "end": 2506
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 2518,
              "end": 2519
            },
            "start": 2511,
            "end": 2520
          }
        ],
        "start": 2411,
        "end": 2535
      },
      "expression": false,
      "start": 2396,
      "end": 2535
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f16",
        "optional": false,
        "typeAnnotation": null,
        "start": 2546,
        "end": 2549
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
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2562,
                  "end": 2563
                },
                "init": null,
                "definite": false,
                "start": 2562,
                "end": 2563
              }
            ],
            "declare": false,
            "start": 2558,
            "end": 2564
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
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2573,
                  "end": 2574
                },
                "init": null,
                "definite": false,
                "start": 2573,
                "end": 2574
              }
            ],
            "declare": false,
            "start": 2569,
            "end": 2575
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "SequenceExpression",
                  "expressions": [
                    {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2581,
                        "end": 2582
                      },
                      "right": {
                        "type": "ArrayExpression",
                        "elements": [],
                        "start": 2585,
                        "end": 2587
                      },
                      "start": 2581,
                      "end": 2587
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2589,
                      "end": 2590
                    }
                  ],
                  "start": 2581,
                  "end": 2590
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2592,
                  "end": 2596
                },
                "optional": false,
                "computed": false,
                "start": 2580,
                "end": 2596
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 5,
                  "raw": "5",
                  "start": 2597,
                  "end": 2598
                }
              ],
              "optional": false,
              "start": 2580,
              "end": 2599
            },
            "directive": null,
            "start": 2580,
            "end": 2600
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "SequenceExpression",
                  "expressions": [
                    {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2606,
                          "end": 2607
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "push",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2608,
                          "end": 2612
                        },
                        "optional": false,
                        "computed": false,
                        "start": 2606,
                        "end": 2612
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": "hello",
                          "raw": "\"hello\"",
                          "start": 2613,
                          "end": 2620
                        }
                      ],
                      "optional": false,
                      "start": 2606,
                      "end": 2621
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2623,
                      "end": 2624
                    }
                  ],
                  "start": 2606,
                  "end": 2624
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2626,
                  "end": 2630
                },
                "optional": false,
                "computed": false,
                "start": 2605,
                "end": 2630
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 2631,
                  "end": 2635
                }
              ],
              "optional": false,
              "start": 2605,
              "end": 2636
            },
            "directive": null,
            "start": 2605,
            "end": 2637
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2644,
                  "end": 2645
                },
                "property": {
                  "type": "Literal",
                  "value": 3,
                  "raw": "3",
                  "start": 2648,
                  "end": 2649
                },
                "optional": false,
                "computed": true,
                "start": 2642,
                "end": 2650
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
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2655,
                      "end": 2656
                    },
                    "value": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 2658,
                      "end": 2659
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 2655,
                    "end": 2659
                  }
                ],
                "start": 2653,
                "end": 2661
              },
              "start": 2642,
              "end": 2661
            },
            "directive": null,
            "start": 2642,
            "end": 2662
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 2674,
              "end": 2675
            },
            "start": 2667,
            "end": 2676
          }
        ],
        "start": 2552,
        "end": 2728
      },
      "expression": false,
      "start": 2537,
      "end": 2728
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f17",
        "optional": false,
        "typeAnnotation": null,
        "start": 2739,
        "end": 2742
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
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2755,
                  "end": 2756
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [],
                  "start": 2759,
                  "end": 2761
                },
                "definite": false,
                "start": 2755,
                "end": 2761
              }
            ],
            "declare": false,
            "start": 2751,
            "end": 2762
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2767,
                  "end": 2768
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "unshift",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2769,
                  "end": 2776
                },
                "optional": false,
                "computed": false,
                "start": 2767,
                "end": 2776
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 5,
                  "raw": "5",
                  "start": 2777,
                  "end": 2778
                }
              ],
              "optional": false,
              "start": 2767,
              "end": 2779
            },
            "directive": null,
            "start": 2767,
            "end": 2780
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2785,
                  "end": 2786
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "unshift",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2787,
                  "end": 2794
                },
                "optional": false,
                "computed": false,
                "start": 2785,
                "end": 2794
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": "hello",
                  "raw": "\"hello\"",
                  "start": 2795,
                  "end": 2802
                }
              ],
              "optional": false,
              "start": 2785,
              "end": 2803
            },
            "directive": null,
            "start": 2785,
            "end": 2804
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2809,
                  "end": 2810
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "unshift",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2811,
                  "end": 2818
                },
                "optional": false,
                "computed": false,
                "start": 2809,
                "end": 2818
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 2819,
                  "end": 2823
                }
              ],
              "optional": false,
              "start": 2809,
              "end": 2824
            },
            "directive": null,
            "start": 2809,
            "end": 2825
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 2837,
              "end": 2838
            },
            "start": 2830,
            "end": 2839
          }
        ],
        "start": 2745,
        "end": 2875
      },
      "expression": false,
      "start": 2730,
      "end": 2875
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f18",
        "optional": false,
        "typeAnnotation": null,
        "start": 2886,
        "end": 2889
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
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2902,
                  "end": 2903
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [],
                  "start": 2906,
                  "end": 2908
                },
                "definite": false,
                "start": 2902,
                "end": 2908
              }
            ],
            "declare": false,
            "start": 2898,
            "end": 2909
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2914,
                  "end": 2915
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2916,
                  "end": 2920
                },
                "optional": false,
                "computed": false,
                "start": 2914,
                "end": 2920
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 5,
                  "raw": "5",
                  "start": 2921,
                  "end": 2922
                }
              ],
              "optional": false,
              "start": 2914,
              "end": 2923
            },
            "directive": null,
            "start": 2914,
            "end": 2924
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2929,
                  "end": 2930
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "unshift",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2931,
                  "end": 2938
                },
                "optional": false,
                "computed": false,
                "start": 2929,
                "end": 2938
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": "hello",
                  "raw": "\"hello\"",
                  "start": 2939,
                  "end": 2946
                }
              ],
              "optional": false,
              "start": 2929,
              "end": 2947
            },
            "directive": null,
            "start": 2929,
            "end": 2948
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2953,
                  "end": 2954
                },
                "property": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 2955,
                  "end": 2956
                },
                "optional": false,
                "computed": true,
                "start": 2953,
                "end": 2957
              },
              "right": {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 2960,
                "end": 2964
              },
              "start": 2953,
              "end": 2964
            },
            "directive": null,
            "start": 2953,
            "end": 2965
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 2977,
              "end": 2978
            },
            "start": 2970,
            "end": 2979
          }
        ],
        "start": 2892,
        "end": 3015
      },
      "expression": false,
      "start": 2877,
      "end": 3015
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 3056,
        "end": 3059
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
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
                      "name": "val",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3067,
                      "end": 3070
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 3072,
                        "end": 3078
                      },
                      "start": 3070,
                      "end": 3078
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 3067,
                    "end": 3078
                  }
                ],
                "start": 3065,
                "end": 3080
              },
              "start": 3065,
              "end": 3082
            },
            "start": 3063,
            "end": 3082
          },
          "start": 3060,
          "end": 3082
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 3085,
          "end": 3089
        },
        "start": 3083,
        "end": 3089
      },
      "body": null,
      "expression": false,
      "start": 3039,
      "end": 3090
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
            "name": "arr",
            "optional": false,
            "typeAnnotation": null,
            "start": 3096,
            "end": 3099
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [],
            "start": 3102,
            "end": 3104
          },
          "definite": false,
          "start": 3096,
          "end": 3104
        }
      ],
      "declare": false,
      "start": 3092,
      "end": 3104
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
            "name": "arr",
            "optional": false,
            "typeAnnotation": null,
            "start": 3105,
            "end": 3108
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "push",
            "optional": false,
            "typeAnnotation": null,
            "start": 3109,
            "end": 3113
          },
          "optional": false,
          "computed": false,
          "start": 3105,
          "end": 3113
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "val",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3116,
                  "end": 3119
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 3121,
                  "end": 3122
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 3116,
                "end": 3122
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3124,
                  "end": 3127
                },
                "value": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 3129,
                  "end": 3130
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 3124,
                "end": 3130
              }
            ],
            "start": 3114,
            "end": 3132
          }
        ],
        "optional": false,
        "start": 3105,
        "end": 3133
      },
      "directive": null,
      "start": 3105,
      "end": 3134
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
          "start": 3135,
          "end": 3138
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "arr",
            "optional": false,
            "typeAnnotation": null,
            "start": 3139,
            "end": 3142
          }
        ],
        "optional": false,
        "start": 3135,
        "end": 3143
      },
      "directive": null,
      "start": 3135,
      "end": 3144
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 3144
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 0,
    "end": 7
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 8,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "cond",
    "start": 17,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 21,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 22,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 23,
    "end": 24
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 25,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 32,
    "end": 33
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 35,
    "end": 43
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 44,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 46,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 49,
    "end": 50
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 55,
    "end": 58
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 59,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 61,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 63,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 64,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 65,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 71,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 72,
    "end": 73
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 73,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 74,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 76,
    "end": 77
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 78,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 79,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 85,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 86,
    "end": 87
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 87,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 88,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 90,
    "end": 91
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 92,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 99,
    "end": 100
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 105,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 106,
    "end": 107
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 107,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 108,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 110,
    "end": 111
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 112,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 116,
    "end": 117
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 122,
    "end": 128
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 129,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 130,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 166,
    "end": 167
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 169,
    "end": 177
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 178,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "value": "{",
    "start": 183,
    "end": 184
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 189,
    "end": 192
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "type": "Punctuator",
    "value": "[",
    "start": 197,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 198,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 199,
    "end": 200
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 205,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 206,
    "end": 207
  },
  {
    "type": "Identifier",
    "value": "push",
    "start": 207,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 211,
    "end": 212
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 212,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 213,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 214,
    "end": 215
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 220,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 221,
    "end": 222
  },
  {
    "type": "Identifier",
    "value": "push",
    "start": 222,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 226,
    "end": 227
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 227,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 234,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 235,
    "end": 236
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 241,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 242,
    "end": 243
  },
  {
    "type": "Identifier",
    "value": "push",
    "start": 243,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 247,
    "end": 248
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 248,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 252,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 253,
    "end": 254
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 259,
    "end": 265
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 266,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 267,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 303,
    "end": 304
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 306,
    "end": 314
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 315,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 317,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 318,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 320,
    "end": 321
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 326,
    "end": 329
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 330,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 331,
    "end": 332
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 337,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 339,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 341,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 342,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 343,
    "end": 344
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 349,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 350,
    "end": 351
  },
  {
    "type": "Identifier",
    "value": "push",
    "start": 351,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 355,
    "end": 356
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 356,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 357,
    "end": 358
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 359,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 366,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 367,
    "end": 368
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 373,
    "end": 379
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 380,
    "end": 381
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 381,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 407,
    "end": 408
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 410,
    "end": 418
  },
  {
    "type": "Identifier",
    "value": "f4",
    "start": 419,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 421,
    "end": 422
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 422,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 424,
    "end": 425
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 430,
    "end": 433
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 434,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 436,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 438,
    "end": 439
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 439,
    "end": 440
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 440,
    "end": 441
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 446,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 449,
    "end": 450
  },
  {
    "type": "Identifier",
    "value": "cond",
    "start": 450,
    "end": 454
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 454,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 455,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "x",
    "start": 468,
    "end": 469
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 469,
    "end": 470
  },
  {
    "type": "Identifier",
    "value": "push",
    "start": 470,
    "end": 474
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 474,
    "end": 475
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 475,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 476,
    "end": 477
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 477,
    "end": 478
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 483,
    "end": 484
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 489,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 494,
    "end": 495
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 504,
    "end": 505
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 505,
    "end": 506
  },
  {
    "type": "Identifier",
    "value": "push",
    "start": 506,
    "end": 510
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 510,
    "end": 511
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 511,
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
    "type": "Punctuator",
    "value": "}",
    "start": 525,
    "end": 526
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 531,
    "end": 537
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 538,
    "end": 539
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 539,
    "end": 540
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 565,
    "end": 566
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 568,
    "end": 576
  },
  {
    "type": "Identifier",
    "value": "f5",
    "start": 577,
    "end": 579
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 579,
    "end": 580
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 580,
    "end": 581
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 582,
    "end": 583
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 588,
    "end": 591
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 592,
    "end": 593
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 593,
    "end": 594
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 599,
    "end": 601
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 602,
    "end": 603
  },
  {
    "type": "Identifier",
    "value": "cond",
    "start": 603,
    "end": 607
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 607,
    "end": 608
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 608,
    "end": 609
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 609,
    "end": 610
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 611,
    "end": 612
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 621,
    "end": 622
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 623,
    "end": 624
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 625,
    "end": 626
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 626,
    "end": 627
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 627,
    "end": 628
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 637,
    "end": 638
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 638,
    "end": 639
  },
  {
    "type": "Identifier",
    "value": "push",
    "start": 639,
    "end": 643
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 643,
    "end": 644
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 644,
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
    "type": "Punctuator",
    "value": "}",
    "start": 652,
    "end": 653
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 658,
    "end": 662
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 663,
    "end": 664
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 673,
    "end": 674
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 675,
    "end": 676
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 677,
    "end": 678
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 678,
    "end": 679
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 679,
    "end": 680
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 689,
    "end": 690
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 690,
    "end": 691
  },
  {
    "type": "Identifier",
    "value": "push",
    "start": 691,
    "end": 695
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 695,
    "end": 696
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 696,
    "end": 703
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 703,
    "end": 704
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 704,
    "end": 705
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 710,
    "end": 711
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 716,
    "end": 722
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 723,
    "end": 724
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 724,
    "end": 725
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 750,
    "end": 751
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 753,
    "end": 761
  },
  {
    "type": "Identifier",
    "value": "f6",
    "start": 762,
    "end": 764
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 764,
    "end": 765
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 765,
    "end": 766
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 767,
    "end": 768
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 773,
    "end": 776
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 777,
    "end": 778
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 778,
    "end": 779
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 784,
    "end": 786
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 787,
    "end": 788
  },
  {
    "type": "Identifier",
    "value": "cond",
    "start": 788,
    "end": 792
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 792,
    "end": 793
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 793,
    "end": 794
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 794,
    "end": 795
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 796,
    "end": 797
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 806,
    "end": 807
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 808,
    "end": 809
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 810,
    "end": 811
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 811,
    "end": 812
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 817,
    "end": 818
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 823,
    "end": 827
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 828,
    "end": 829
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 838,
    "end": 839
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 840,
    "end": 841
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 842,
    "end": 843
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 843,
    "end": 844
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 844,
    "end": 845
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 854,
    "end": 855
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 855,
    "end": 856
  },
  {
    "type": "Identifier",
    "value": "push",
    "start": 856,
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
    "value": "\"hello\"",
    "start": 861,
    "end": 868
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 868,
    "end": 869
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 869,
    "end": 870
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 875,
    "end": 876
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 881,
    "end": 887
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 888,
    "end": 889
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 889,
    "end": 890
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 913,
    "end": 914
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 916,
    "end": 924
  },
  {
    "type": "Identifier",
    "value": "f7",
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
    "type": "Punctuator",
    "value": ")",
    "start": 928,
    "end": 929
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 930,
    "end": 931
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 936,
    "end": 939
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 940,
    "end": 941
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 942,
    "end": 943
  },
  {
    "type": "Null",
    "value": "null",
    "start": 944,
    "end": 948
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 948,
    "end": 949
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 954,
    "end": 956
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 957,
    "end": 958
  },
  {
    "type": "Identifier",
    "value": "cond",
    "start": 958,
    "end": 962
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 962,
    "end": 963
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 963,
    "end": 964
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 964,
    "end": 965
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 966,
    "end": 967
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 976,
    "end": 977
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 978,
    "end": 979
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 980,
    "end": 981
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 981,
    "end": 982
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 982,
    "end": 983
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 992,
    "end": 997
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 998,
    "end": 999
  },
  {
    "type": "Identifier",
    "value": "cond",
    "start": 999,
    "end": 1003
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1003,
    "end": 1004
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1004,
    "end": 1005
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1005,
    "end": 1006
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1007,
    "end": 1008
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1021,
    "end": 1022
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1022,
    "end": 1023
  },
  {
    "type": "Identifier",
    "value": "push",
    "start": 1023,
    "end": 1027
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1027,
    "end": 1028
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 1028,
    "end": 1035
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1035,
    "end": 1036
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1036,
    "end": 1037
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1046,
    "end": 1047
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1052,
    "end": 1053
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1058,
    "end": 1064
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1065,
    "end": 1066
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1066,
    "end": 1067
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1088,
    "end": 1089
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1091,
    "end": 1099
  },
  {
    "type": "Identifier",
    "value": "f8",
    "start": 1100,
    "end": 1102
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1102,
    "end": 1103
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1103,
    "end": 1104
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1105,
    "end": 1106
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1111,
    "end": 1114
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1115,
    "end": 1116
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1117,
    "end": 1118
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1119,
    "end": 1120
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1120,
    "end": 1121
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1121,
    "end": 1122
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1127,
    "end": 1128
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1128,
    "end": 1129
  },
  {
    "type": "Identifier",
    "value": "push",
    "start": 1129,
    "end": 1133
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1133,
    "end": 1134
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 1134,
    "end": 1135
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1135,
    "end": 1136
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1136,
    "end": 1137
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1142,
    "end": 1144
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1145,
    "end": 1146
  },
  {
    "type": "Identifier",
    "value": "cond",
    "start": 1146,
    "end": 1150
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1150,
    "end": 1151
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1151,
    "end": 1152
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1152,
    "end": 1153
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1154,
    "end": 1160
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1161,
    "end": 1162
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1162,
    "end": 1163
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1181,
    "end": 1182
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1182,
    "end": 1183
  },
  {
    "type": "Identifier",
    "value": "push",
    "start": 1183,
    "end": 1187
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1187,
    "end": 1188
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 1188,
    "end": 1195
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1195,
    "end": 1196
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1196,
    "end": 1197
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1202,
    "end": 1204
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1205,
    "end": 1206
  },
  {
    "type": "Identifier",
    "value": "cond",
    "start": 1206,
    "end": 1210
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1210,
    "end": 1211
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1211,
    "end": 1212
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1212,
    "end": 1213
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1214,
    "end": 1220
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1221,
    "end": 1222
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1222,
    "end": 1223
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1252,
    "end": 1253
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1253,
    "end": 1254
  },
  {
    "type": "Identifier",
    "value": "push",
    "start": 1254,
    "end": 1258
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1258,
    "end": 1259
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1259,
    "end": 1263
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1263,
    "end": 1264
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1264,
    "end": 1265
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1270,
    "end": 1276
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1277,
    "end": 1278
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1278,
    "end": 1279
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1314,
    "end": 1315
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1317,
    "end": 1325
  },
  {
    "type": "Identifier",
    "value": "f9",
    "start": 1326,
    "end": 1328
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1328,
    "end": 1329
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1329,
    "end": 1330
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1331,
    "end": 1332
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1337,
    "end": 1340
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1341,
    "end": 1342
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1343,
    "end": 1344
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1345,
    "end": 1346
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "type": "Keyword",
    "value": "if",
    "start": 1353,
    "end": 1355
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1356,
    "end": 1357
  },
  {
    "type": "Identifier",
    "value": "cond",
    "start": 1357,
    "end": 1361
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1361,
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
    "value": ")",
    "start": 1363,
    "end": 1364
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1365,
    "end": 1366
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1375,
    "end": 1376
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1376,
    "end": 1377
  },
  {
    "type": "Identifier",
    "value": "push",
    "start": 1377,
    "end": 1381
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1381,
    "end": 1382
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 1382,
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
    "type": "Keyword",
    "value": "return",
    "start": 1394,
    "end": 1400
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1401,
    "end": 1402
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1402,
    "end": 1403
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1421,
    "end": 1422
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1427,
    "end": 1431
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1432,
    "end": 1433
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1442,
    "end": 1443
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1443,
    "end": 1444
  },
  {
    "type": "Identifier",
    "value": "push",
    "start": 1444,
    "end": 1448
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1448,
    "end": 1449
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 1449,
    "end": 1456
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1456,
    "end": 1457
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1457,
    "end": 1458
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1467,
    "end": 1473
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1474,
    "end": 1475
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1475,
    "end": 1476
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1494,
    "end": 1495
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1496,
    "end": 1497
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1499,
    "end": 1507
  },
  {
    "type": "Identifier",
    "value": "f10",
    "start": 1508,
    "end": 1511
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1511,
    "end": 1512
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1512,
    "end": 1513
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1514,
    "end": 1515
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1520,
    "end": 1523
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1524,
    "end": 1525
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1526,
    "end": 1527
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1528,
    "end": 1529
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1529,
    "end": 1530
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1530,
    "end": 1531
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1536,
    "end": 1538
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1539,
    "end": 1540
  },
  {
    "type": "Identifier",
    "value": "cond",
    "start": 1540,
    "end": 1544
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1544,
    "end": 1545
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1545,
    "end": 1546
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1546,
    "end": 1547
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1548,
    "end": 1549
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1558,
    "end": 1559
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1559,
    "end": 1560
  },
  {
    "type": "Identifier",
    "value": "push",
    "start": 1560,
    "end": 1564
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1564,
    "end": 1565
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1565,
    "end": 1569
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1569,
    "end": 1570
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1570,
    "end": 1571
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1580,
    "end": 1581
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1581,
    "end": 1582
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1601,
    "end": 1602
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1607,
    "end": 1611
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1612,
    "end": 1613
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1622,
    "end": 1623
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1623,
    "end": 1624
  },
  {
    "type": "Identifier",
    "value": "push",
    "start": 1624,
    "end": 1628
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1628,
    "end": 1629
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 1629,
    "end": 1630
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1630,
    "end": 1631
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1631,
    "end": 1632
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1641,
    "end": 1642
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1642,
    "end": 1643
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 1665,
    "end": 1670
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1671,
    "end": 1672
  },
  {
    "type": "Identifier",
    "value": "cond",
    "start": 1672,
    "end": 1676
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1676,
    "end": 1677
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1677,
    "end": 1678
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1678,
    "end": 1679
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1680,
    "end": 1681
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1694,
    "end": 1695
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1695,
    "end": 1696
  },
  {
    "type": "Identifier",
    "value": "push",
    "start": 1696,
    "end": 1700
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1700,
    "end": 1701
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 1701,
    "end": 1708
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1708,
    "end": 1709
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1709,
    "end": 1710
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1719,
    "end": 1720
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1729,
    "end": 1730
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1730,
    "end": 1731
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1760,
    "end": 1761
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1766,
    "end": 1767
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1767,
    "end": 1768
  },
  {
    "type": "Identifier",
    "value": "push",
    "start": 1768,
    "end": 1772
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1772,
    "end": 1773
  },
  {
    "type": "Numeric",
    "value": "99",
    "start": 1773,
    "end": 1775
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1775,
    "end": 1776
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1776,
    "end": 1777
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1782,
    "end": 1788
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1789,
    "end": 1790
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1790,
    "end": 1791
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1826,
    "end": 1827
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1829,
    "end": 1837
  },
  {
    "type": "Identifier",
    "value": "f11",
    "start": 1838,
    "end": 1841
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1841,
    "end": 1842
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1842,
    "end": 1843
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1844,
    "end": 1845
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1850,
    "end": 1853
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1854,
    "end": 1855
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1856,
    "end": 1857
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1858,
    "end": 1859
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1859,
    "end": 1860
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1860,
    "end": 1861
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1866,
    "end": 1868
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1869,
    "end": 1870
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1870,
    "end": 1871
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1871,
    "end": 1872
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 1872,
    "end": 1878
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1879,
    "end": 1882
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1883,
    "end": 1884
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1884,
    "end": 1885
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1886,
    "end": 1887
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1930,
    "end": 1931
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1931,
    "end": 1932
  },
  {
    "type": "Identifier",
    "value": "push",
    "start": 1932,
    "end": 1936
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1936,
    "end": 1937
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 1937,
    "end": 1944
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1944,
    "end": 1945
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1945,
    "end": 1946
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1951,
    "end": 1952
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1957,
    "end": 1963
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1964,
    "end": 1965
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1965,
    "end": 1966
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1967,
    "end": 1968
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1970,
    "end": 1978
  },
  {
    "type": "Identifier",
    "value": "f12",
    "start": 1979,
    "end": 1982
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1982,
    "end": 1983
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1983,
    "end": 1984
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1985,
    "end": 1986
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1991,
    "end": 1994
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1995,
    "end": 1996
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1996,
    "end": 1997
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2002,
    "end": 2003
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2004,
    "end": 2005
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2006,
    "end": 2007
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2007,
    "end": 2008
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2008,
    "end": 2009
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2014,
    "end": 2016
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2017,
    "end": 2018
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2018,
    "end": 2019
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2019,
    "end": 2020
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 2020,
    "end": 2026
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 2027,
    "end": 2030
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 2031,
    "end": 2032
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2032,
    "end": 2033
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2034,
    "end": 2035
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2078,
    "end": 2079
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2079,
    "end": 2080
  },
  {
    "type": "Identifier",
    "value": "push",
    "start": 2080,
    "end": 2084
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2084,
    "end": 2085
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 2085,
    "end": 2092
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2092,
    "end": 2093
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2093,
    "end": 2094
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2099,
    "end": 2100
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2105,
    "end": 2111
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2112,
    "end": 2113
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2113,
    "end": 2114
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2115,
    "end": 2116
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2118,
    "end": 2126
  },
  {
    "type": "Identifier",
    "value": "f13",
    "start": 2127,
    "end": 2130
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2130,
    "end": 2131
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2131,
    "end": 2132
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2133,
    "end": 2134
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2139,
    "end": 2142
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2143,
    "end": 2144
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2145,
    "end": 2146
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2147,
    "end": 2148
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2148,
    "end": 2149
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2149,
    "end": 2150
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2155,
    "end": 2156
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2156,
    "end": 2157
  },
  {
    "type": "Identifier",
    "value": "push",
    "start": 2157,
    "end": 2161
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2161,
    "end": 2162
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 2162,
    "end": 2163
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2163,
    "end": 2164
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2164,
    "end": 2165
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2170,
    "end": 2171
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2171,
    "end": 2172
  },
  {
    "type": "Identifier",
    "value": "push",
    "start": 2172,
    "end": 2176
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2176,
    "end": 2177
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 2177,
    "end": 2184
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2184,
    "end": 2185
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2185,
    "end": 2186
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2191,
    "end": 2192
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2192,
    "end": 2193
  },
  {
    "type": "Identifier",
    "value": "push",
    "start": 2193,
    "end": 2197
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2197,
    "end": 2198
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 2198,
    "end": 2202
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2202,
    "end": 2203
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2203,
    "end": 2204
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2209,
    "end": 2215
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2216,
    "end": 2217
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2217,
    "end": 2218
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2253,
    "end": 2254
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2256,
    "end": 2264
  },
  {
    "type": "Identifier",
    "value": "f14",
    "start": 2265,
    "end": 2268
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2268,
    "end": 2269
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2269,
    "end": 2270
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2271,
    "end": 2272
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2277,
    "end": 2282
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2283,
    "end": 2284
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2285,
    "end": 2286
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2287,
    "end": 2288
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2288,
    "end": 2289
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2289,
    "end": 2290
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2295,
    "end": 2296
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2296,
    "end": 2297
  },
  {
    "type": "Identifier",
    "value": "push",
    "start": 2297,
    "end": 2301
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2301,
    "end": 2302
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 2302,
    "end": 2303
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2303,
    "end": 2304
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2304,
    "end": 2305
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2310,
    "end": 2311
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2311,
    "end": 2312
  },
  {
    "type": "Identifier",
    "value": "push",
    "start": 2312,
    "end": 2316
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2316,
    "end": 2317
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 2317,
    "end": 2324
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2324,
    "end": 2325
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2325,
    "end": 2326
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2331,
    "end": 2332
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2332,
    "end": 2333
  },
  {
    "type": "Identifier",
    "value": "push",
    "start": 2333,
    "end": 2337
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2337,
    "end": 2338
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 2338,
    "end": 2342
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2342,
    "end": 2343
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2343,
    "end": 2344
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2349,
    "end": 2355
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2356,
    "end": 2357
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2357,
    "end": 2358
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2393,
    "end": 2394
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2396,
    "end": 2404
  },
  {
    "type": "Identifier",
    "value": "f15",
    "start": 2405,
    "end": 2408
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2408,
    "end": 2409
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2409,
    "end": 2410
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2411,
    "end": 2412
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2417,
    "end": 2420
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2421,
    "end": 2422
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2423,
    "end": 2424
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2425,
    "end": 2426
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2426,
    "end": 2427
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2427,
    "end": 2428
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 2433,
    "end": 2438
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2439,
    "end": 2440
  },
  {
    "type": "Identifier",
    "value": "cond",
    "start": 2440,
    "end": 2444
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2444,
    "end": 2445
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2445,
    "end": 2446
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2446,
    "end": 2447
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2448,
    "end": 2449
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 2458,
    "end": 2463
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2464,
    "end": 2465
  },
  {
    "type": "Identifier",
    "value": "cond",
    "start": 2465,
    "end": 2469
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2469,
    "end": 2470
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2470,
    "end": 2471
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2471,
    "end": 2472
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2473,
    "end": 2474
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2474,
    "end": 2475
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2484,
    "end": 2485
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2485,
    "end": 2486
  },
  {
    "type": "Identifier",
    "value": "push",
    "start": 2486,
    "end": 2490
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2490,
    "end": 2491
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 2491,
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
    "type": "Punctuator",
    "value": "}",
    "start": 2505,
    "end": 2506
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2511,
    "end": 2517
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2518,
    "end": 2519
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2519,
    "end": 2520
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2534,
    "end": 2535
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2537,
    "end": 2545
  },
  {
    "type": "Identifier",
    "value": "f16",
    "start": 2546,
    "end": 2549
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2549,
    "end": 2550
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2550,
    "end": 2551
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2552,
    "end": 2553
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2558,
    "end": 2561
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2562,
    "end": 2563
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2563,
    "end": 2564
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2569,
    "end": 2572
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2573,
    "end": 2574
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2574,
    "end": 2575
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2580,
    "end": 2581
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2581,
    "end": 2582
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2583,
    "end": 2584
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2585,
    "end": 2586
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2586,
    "end": 2587
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2587,
    "end": 2588
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2589,
    "end": 2590
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2590,
    "end": 2591
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2591,
    "end": 2592
  },
  {
    "type": "Identifier",
    "value": "push",
    "start": 2592,
    "end": 2596
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2596,
    "end": 2597
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 2597,
    "end": 2598
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2598,
    "end": 2599
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2599,
    "end": 2600
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2605,
    "end": 2606
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2606,
    "end": 2607
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2607,
    "end": 2608
  },
  {
    "type": "Identifier",
    "value": "push",
    "start": 2608,
    "end": 2612
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2612,
    "end": 2613
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 2613,
    "end": 2620
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2620,
    "end": 2621
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2621,
    "end": 2622
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2623,
    "end": 2624
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2624,
    "end": 2625
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2625,
    "end": 2626
  },
  {
    "type": "Identifier",
    "value": "push",
    "start": 2626,
    "end": 2630
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2630,
    "end": 2631
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 2631,
    "end": 2635
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2635,
    "end": 2636
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2636,
    "end": 2637
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2642,
    "end": 2643
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2643,
    "end": 2644
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": ")",
    "start": 2646,
    "end": 2647
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2647,
    "end": 2648
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 2648,
    "end": 2649
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2649,
    "end": 2650
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2651,
    "end": 2652
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2653,
    "end": 2654
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2655,
    "end": 2656
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2656,
    "end": 2657
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2658,
    "end": 2659
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2660,
    "end": 2661
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2661,
    "end": 2662
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2667,
    "end": 2673
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "type": "Punctuator",
    "value": "}",
    "start": 2727,
    "end": 2728
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2730,
    "end": 2738
  },
  {
    "type": "Identifier",
    "value": "f17",
    "start": 2739,
    "end": 2742
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2742,
    "end": 2743
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2743,
    "end": 2744
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2745,
    "end": 2746
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2751,
    "end": 2754
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2755,
    "end": 2756
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2757,
    "end": 2758
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2759,
    "end": 2760
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2760,
    "end": 2761
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2761,
    "end": 2762
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2767,
    "end": 2768
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2768,
    "end": 2769
  },
  {
    "type": "Identifier",
    "value": "unshift",
    "start": 2769,
    "end": 2776
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2776,
    "end": 2777
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 2777,
    "end": 2778
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2778,
    "end": 2779
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2779,
    "end": 2780
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2785,
    "end": 2786
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2786,
    "end": 2787
  },
  {
    "type": "Identifier",
    "value": "unshift",
    "start": 2787,
    "end": 2794
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2794,
    "end": 2795
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 2795,
    "end": 2802
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2802,
    "end": 2803
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2803,
    "end": 2804
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2809,
    "end": 2810
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2810,
    "end": 2811
  },
  {
    "type": "Identifier",
    "value": "unshift",
    "start": 2811,
    "end": 2818
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2818,
    "end": 2819
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 2819,
    "end": 2823
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2823,
    "end": 2824
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2824,
    "end": 2825
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2830,
    "end": 2836
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2837,
    "end": 2838
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2838,
    "end": 2839
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2874,
    "end": 2875
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2877,
    "end": 2885
  },
  {
    "type": "Identifier",
    "value": "f18",
    "start": 2886,
    "end": 2889
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2889,
    "end": 2890
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2890,
    "end": 2891
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2892,
    "end": 2893
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2898,
    "end": 2901
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2902,
    "end": 2903
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2904,
    "end": 2905
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2906,
    "end": 2907
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2907,
    "end": 2908
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2908,
    "end": 2909
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2914,
    "end": 2915
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2915,
    "end": 2916
  },
  {
    "type": "Identifier",
    "value": "push",
    "start": 2916,
    "end": 2920
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2920,
    "end": 2921
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 2921,
    "end": 2922
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2922,
    "end": 2923
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2923,
    "end": 2924
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2929,
    "end": 2930
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2930,
    "end": 2931
  },
  {
    "type": "Identifier",
    "value": "unshift",
    "start": 2931,
    "end": 2938
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2938,
    "end": 2939
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 2939,
    "end": 2946
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2946,
    "end": 2947
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2947,
    "end": 2948
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2953,
    "end": 2954
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2954,
    "end": 2955
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 2955,
    "end": 2956
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2956,
    "end": 2957
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2958,
    "end": 2959
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 2960,
    "end": 2964
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2964,
    "end": 2965
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2970,
    "end": 2976
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2977,
    "end": 2978
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2978,
    "end": 2979
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3014,
    "end": 3015
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 3039,
    "end": 3046
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3047,
    "end": 3055
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 3056,
    "end": 3059
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3059,
    "end": 3060
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 3060,
    "end": 3063
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3063,
    "end": 3064
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3065,
    "end": 3066
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 3067,
    "end": 3070
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3070,
    "end": 3071
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3072,
    "end": 3078
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3079,
    "end": 3080
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3080,
    "end": 3081
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3081,
    "end": 3082
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3082,
    "end": 3083
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3083,
    "end": 3084
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 3085,
    "end": 3089
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3089,
    "end": 3090
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 3092,
    "end": 3095
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 3096,
    "end": 3099
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3100,
    "end": 3101
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3102,
    "end": 3103
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3103,
    "end": 3104
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 3105,
    "end": 3108
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3108,
    "end": 3109
  },
  {
    "type": "Identifier",
    "value": "push",
    "start": 3109,
    "end": 3113
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3113,
    "end": 3114
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3114,
    "end": 3115
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 3116,
    "end": 3119
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3119,
    "end": 3120
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3121,
    "end": 3122
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3122,
    "end": 3123
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 3124,
    "end": 3127
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3127,
    "end": 3128
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 3129,
    "end": 3130
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3131,
    "end": 3132
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3132,
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
    "value": "foo",
    "start": 3135,
    "end": 3138
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3138,
    "end": 3139
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 3139,
    "end": 3142
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3142,
    "end": 3143
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3143,
    "end": 3144
  }
]
```
