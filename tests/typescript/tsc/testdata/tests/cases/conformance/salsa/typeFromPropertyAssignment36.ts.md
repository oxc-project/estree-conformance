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
        "start": 9,
        "end": 10
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 14,
              "end": 21
            },
            "start": 12,
            "end": 21
          },
          "start": 11,
          "end": 21
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null,
              "start": 38,
              "end": 39
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 42,
              "end": 49
            },
            "expression": false,
            "start": 29,
            "end": 49
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
                  "name": "d",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 54,
                  "end": 55
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "e",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 56,
                  "end": 57
                },
                "optional": false,
                "computed": false,
                "start": 54,
                "end": 57
              },
              "right": {
                "type": "Literal",
                "value": 12,
                "raw": "12",
                "start": 60,
                "end": 62
              },
              "start": 54,
              "end": 62
            },
            "directive": null,
            "start": 54,
            "end": 62
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 67,
                "end": 68
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 69,
                "end": 70
              },
              "optional": false,
              "computed": false,
              "start": 67,
              "end": 70
            },
            "directive": null,
            "start": 67,
            "end": 70
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 80,
              "end": 81
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
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "d",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 93,
                        "end": 94
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "q",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 95,
                        "end": 96
                      },
                      "optional": false,
                      "computed": false,
                      "start": 93,
                      "end": 96
                    },
                    "right": {
                      "type": "Literal",
                      "value": false,
                      "raw": "false",
                      "start": 99,
                      "end": 104
                    },
                    "start": 93,
                    "end": 104
                  },
                  "directive": null,
                  "start": 93,
                  "end": 104
                }
              ],
              "start": 83,
              "end": 110
            },
            "alternate": null,
            "start": 76,
            "end": 110
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 154,
                "end": 155
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "q",
                "optional": false,
                "typeAnnotation": null,
                "start": 156,
                "end": 157
              },
              "optional": false,
              "computed": false,
              "start": 154,
              "end": 157
            },
            "directive": null,
            "start": 154,
            "end": 157
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 166,
              "end": 167
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
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "d",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 179,
                        "end": 180
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "q",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 181,
                        "end": 182
                      },
                      "optional": false,
                      "computed": false,
                      "start": 179,
                      "end": 182
                    },
                    "right": {
                      "type": "Literal",
                      "value": false,
                      "raw": "false",
                      "start": 185,
                      "end": 190
                    },
                    "start": 179,
                    "end": 190
                  },
                  "directive": null,
                  "start": 179,
                  "end": 190
                }
              ],
              "start": 169,
              "end": 196
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
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "d",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 216,
                        "end": 217
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "q",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 218,
                        "end": 219
                      },
                      "optional": false,
                      "computed": false,
                      "start": 216,
                      "end": 219
                    },
                    "right": {
                      "type": "Literal",
                      "value": true,
                      "raw": "true",
                      "start": 222,
                      "end": 226
                    },
                    "start": 216,
                    "end": 226
                  },
                  "directive": null,
                  "start": 216,
                  "end": 226
                }
              ],
              "start": 206,
              "end": 232
            },
            "start": 162,
            "end": 232
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 237,
                "end": 238
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "q",
                "optional": false,
                "typeAnnotation": null,
                "start": 239,
                "end": 240
              },
              "optional": false,
              "computed": false,
              "start": 237,
              "end": 240
            },
            "directive": null,
            "start": 237,
            "end": 240
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 249,
              "end": 250
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
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "d",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 262,
                        "end": 263
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "r",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 264,
                        "end": 265
                      },
                      "optional": false,
                      "computed": false,
                      "start": 262,
                      "end": 265
                    },
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 268,
                      "end": 269
                    },
                    "start": 262,
                    "end": 269
                  },
                  "directive": null,
                  "start": 262,
                  "end": 269
                }
              ],
              "start": 252,
              "end": 275
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
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "d",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 295,
                        "end": 296
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "r",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 297,
                        "end": 298
                      },
                      "optional": false,
                      "computed": false,
                      "start": 295,
                      "end": 298
                    },
                    "right": {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 301,
                      "end": 302
                    },
                    "start": 295,
                    "end": 302
                  },
                  "directive": null,
                  "start": 295,
                  "end": 302
                }
              ],
              "start": 285,
              "end": 308
            },
            "start": 245,
            "end": 308
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 313,
                "end": 314
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "r",
                "optional": false,
                "typeAnnotation": null,
                "start": 315,
                "end": 316
              },
              "optional": false,
              "computed": false,
              "start": 313,
              "end": 316
            },
            "directive": null,
            "start": 313,
            "end": 316
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 325,
              "end": 326
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
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "d",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 338,
                        "end": 339
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 340,
                        "end": 341
                      },
                      "optional": false,
                      "computed": false,
                      "start": 338,
                      "end": 341
                    },
                    "right": {
                      "type": "Literal",
                      "value": "hi",
                      "raw": "'hi'",
                      "start": 344,
                      "end": 348
                    },
                    "start": 338,
                    "end": 348
                  },
                  "directive": null,
                  "start": 338,
                  "end": 348
                }
              ],
              "start": 328,
              "end": 354
            },
            "alternate": null,
            "start": 321,
            "end": 354
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null,
              "start": 366,
              "end": 367
            },
            "start": 359,
            "end": 367
          }
        ],
        "start": 23,
        "end": 369
      },
      "expression": false,
      "start": 0,
      "end": 369
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
            "name": "test",
            "optional": false,
            "typeAnnotation": null,
            "start": 452,
            "end": 456
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 459,
                "end": 460
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 461,
                  "end": 465
                }
              ],
              "optional": false,
              "start": 459,
              "end": 466
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null,
              "start": 467,
              "end": 468
            },
            "optional": false,
            "computed": false,
            "start": 459,
            "end": 468
          },
          "definite": false,
          "start": 452,
          "end": 468
        }
      ],
      "declare": false,
      "start": 448,
      "end": 468
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "d",
        "optional": false,
        "typeAnnotation": null,
        "start": 479,
        "end": 480
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 483,
        "end": 486
      },
      "expression": false,
      "start": 470,
      "end": 486
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
            "name": "d",
            "optional": false,
            "typeAnnotation": null,
            "start": 487,
            "end": 488
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "e",
            "optional": false,
            "typeAnnotation": null,
            "start": 489,
            "end": 490
          },
          "optional": false,
          "computed": false,
          "start": 487,
          "end": 490
        },
        "right": {
          "type": "Literal",
          "value": 12,
          "raw": "12",
          "start": 493,
          "end": 495
        },
        "start": 487,
        "end": 495
      },
      "directive": null,
      "start": 487,
      "end": 495
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": null,
          "start": 496,
          "end": 497
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "e",
          "optional": false,
          "typeAnnotation": null,
          "start": 498,
          "end": 499
        },
        "optional": false,
        "computed": false,
        "start": 496,
        "end": 499
      },
      "directive": null,
      "start": 496,
      "end": 499
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "UnaryExpression",
        "operator": "!",
        "argument": {
          "type": "UnaryExpression",
          "operator": "!",
          "argument": {
            "type": "Literal",
            "value": false,
            "raw": "false",
            "start": 507,
            "end": 512
          },
          "prefix": true,
          "start": 506,
          "end": 512
        },
        "prefix": true,
        "start": 505,
        "end": 512
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
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "d",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 520,
                  "end": 521
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "q",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 522,
                  "end": 523
                },
                "optional": false,
                "computed": false,
                "start": 520,
                "end": 523
              },
              "right": {
                "type": "Literal",
                "value": false,
                "raw": "false",
                "start": 526,
                "end": 531
              },
              "start": 520,
              "end": 531
            },
            "directive": null,
            "start": 520,
            "end": 531
          }
        ],
        "start": 514,
        "end": 533
      },
      "alternate": null,
      "start": 501,
      "end": 533
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": null,
          "start": 534,
          "end": 535
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "q",
          "optional": false,
          "typeAnnotation": null,
          "start": 536,
          "end": 537
        },
        "optional": false,
        "computed": false,
        "start": 534,
        "end": 537
      },
      "directive": null,
      "start": 534,
      "end": 537
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "UnaryExpression",
        "operator": "!",
        "argument": {
          "type": "UnaryExpression",
          "operator": "!",
          "argument": {
            "type": "Literal",
            "value": false,
            "raw": "false",
            "start": 544,
            "end": 549
          },
          "prefix": true,
          "start": 543,
          "end": 549
        },
        "prefix": true,
        "start": 542,
        "end": 549
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
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "d",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 557,
                  "end": 558
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "q",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 559,
                  "end": 560
                },
                "optional": false,
                "computed": false,
                "start": 557,
                "end": 560
              },
              "right": {
                "type": "Literal",
                "value": false,
                "raw": "false",
                "start": 563,
                "end": 568
              },
              "start": 557,
              "end": 568
            },
            "directive": null,
            "start": 557,
            "end": 568
          }
        ],
        "start": 551,
        "end": 570
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
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "d",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 582,
                  "end": 583
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "q",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 584,
                  "end": 585
                },
                "optional": false,
                "computed": false,
                "start": 582,
                "end": 585
              },
              "right": {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 588,
                "end": 592
              },
              "start": 582,
              "end": 592
            },
            "directive": null,
            "start": 582,
            "end": 592
          }
        ],
        "start": 576,
        "end": 594
      },
      "start": 538,
      "end": 594
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": null,
          "start": 595,
          "end": 596
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "q",
          "optional": false,
          "typeAnnotation": null,
          "start": 597,
          "end": 598
        },
        "optional": false,
        "computed": false,
        "start": 595,
        "end": 598
      },
      "directive": null,
      "start": 595,
      "end": 598
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "UnaryExpression",
        "operator": "!",
        "argument": {
          "type": "UnaryExpression",
          "operator": "!",
          "argument": {
            "type": "Literal",
            "value": false,
            "raw": "false",
            "start": 605,
            "end": 610
          },
          "prefix": true,
          "start": 604,
          "end": 610
        },
        "prefix": true,
        "start": 603,
        "end": 610
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
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "d",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 618,
                  "end": 619
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "r",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 620,
                  "end": 621
                },
                "optional": false,
                "computed": false,
                "start": 618,
                "end": 621
              },
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 624,
                "end": 625
              },
              "start": 618,
              "end": 625
            },
            "directive": null,
            "start": 618,
            "end": 625
          }
        ],
        "start": 612,
        "end": 627
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
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "d",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 639,
                  "end": 640
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "r",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 641,
                  "end": 642
                },
                "optional": false,
                "computed": false,
                "start": 639,
                "end": 642
              },
              "right": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 645,
                "end": 646
              },
              "start": 639,
              "end": 646
            },
            "directive": null,
            "start": 639,
            "end": 646
          }
        ],
        "start": 633,
        "end": 648
      },
      "start": 599,
      "end": 648
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": null,
          "start": 649,
          "end": 650
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "r",
          "optional": false,
          "typeAnnotation": null,
          "start": 651,
          "end": 652
        },
        "optional": false,
        "computed": false,
        "start": 649,
        "end": 652
      },
      "directive": null,
      "start": 649,
      "end": 652
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
            "name": "g",
            "optional": false,
            "typeAnnotation": null,
            "start": 693,
            "end": 694
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
              "body": [],
              "start": 708,
              "end": 711
            },
            "expression": false,
            "start": 697,
            "end": 711
          },
          "definite": false,
          "start": 693,
          "end": 711
        }
      ],
      "declare": false,
      "start": 687,
      "end": 711
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "UnaryExpression",
        "operator": "!",
        "argument": {
          "type": "UnaryExpression",
          "operator": "!",
          "argument": {
            "type": "Literal",
            "value": false,
            "raw": "false",
            "start": 718,
            "end": 723
          },
          "prefix": true,
          "start": 717,
          "end": 723
        },
        "prefix": true,
        "start": 716,
        "end": 723
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
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "g",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 731,
                  "end": 732
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "expando",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 733,
                  "end": 740
                },
                "optional": false,
                "computed": false,
                "start": 731,
                "end": 740
              },
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 743,
                "end": 744
              },
              "start": 731,
              "end": 744
            },
            "directive": null,
            "start": 731,
            "end": 744
          }
        ],
        "start": 725,
        "end": 746
      },
      "alternate": null,
      "start": 712,
      "end": 746
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "g",
          "optional": false,
          "typeAnnotation": null,
          "start": 747,
          "end": 748
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "expando",
          "optional": false,
          "typeAnnotation": null,
          "start": 749,
          "end": 756
        },
        "optional": false,
        "computed": false,
        "start": 747,
        "end": 756
      },
      "directive": null,
      "start": 747,
      "end": 756
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "UnaryExpression",
        "operator": "!",
        "argument": {
          "type": "UnaryExpression",
          "operator": "!",
          "argument": {
            "type": "Literal",
            "value": false,
            "raw": "false",
            "start": 773,
            "end": 778
          },
          "prefix": true,
          "start": 772,
          "end": 778
        },
        "prefix": true,
        "start": 771,
        "end": 778
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
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "g",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 786,
                  "end": 787
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "both",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 788,
                  "end": 792
                },
                "optional": false,
                "computed": false,
                "start": 786,
                "end": 792
              },
              "right": {
                "type": "Literal",
                "value": "hi",
                "raw": "'hi'",
                "start": 795,
                "end": 799
              },
              "start": 786,
              "end": 799
            },
            "directive": null,
            "start": 786,
            "end": 799
          }
        ],
        "start": 780,
        "end": 801
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
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "g",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 813,
                  "end": 814
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "both",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 815,
                  "end": 819
                },
                "optional": false,
                "computed": false,
                "start": 813,
                "end": 819
              },
              "right": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 822,
                "end": 823
              },
              "start": 813,
              "end": 823
            },
            "directive": null,
            "start": 813,
            "end": 823
          }
        ],
        "start": 807,
        "end": 825
      },
      "start": 767,
      "end": 825
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "g",
          "optional": false,
          "typeAnnotation": null,
          "start": 826,
          "end": 827
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "both",
          "optional": false,
          "typeAnnotation": null,
          "start": 828,
          "end": 832
        },
        "optional": false,
        "computed": false,
        "start": 826,
        "end": 832
      },
      "directive": null,
      "start": 826,
      "end": 832
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 832
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
    "value": "f",
    "start": 9,
    "end": 10
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 10,
    "end": 11
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 11,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 12,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 14,
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
    "value": "function",
    "start": 29,
    "end": 37
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 39,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 40,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 42,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 48,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 54,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 55,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 56,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 58,
    "end": 59
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 60,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 67,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 68,
    "end": 69
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 69,
    "end": 70
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 76,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 79,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 80,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 81,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 83,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 93,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 94,
    "end": 95
  },
  {
    "type": "Identifier",
    "value": "q",
    "start": 95,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 97,
    "end": 98
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 99,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 109,
    "end": 110
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 154,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 155,
    "end": 156
  },
  {
    "type": "Identifier",
    "value": "q",
    "start": 156,
    "end": 157
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 162,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 165,
    "end": 166
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 166,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 167,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 169,
    "end": 170
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 179,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 180,
    "end": 181
  },
  {
    "type": "Identifier",
    "value": "q",
    "start": 181,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 183,
    "end": 184
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 185,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 195,
    "end": 196
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 201,
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
    "value": "d",
    "start": 216,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 217,
    "end": 218
  },
  {
    "type": "Identifier",
    "value": "q",
    "start": 218,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 220,
    "end": 221
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 222,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 231,
    "end": 232
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 237,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 238,
    "end": 239
  },
  {
    "type": "Identifier",
    "value": "q",
    "start": 239,
    "end": 240
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 245,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 248,
    "end": 249
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 249,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 250,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 252,
    "end": 253
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 262,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 263,
    "end": 264
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 264,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 266,
    "end": 267
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 268,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 274,
    "end": 275
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 280,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 285,
    "end": 286
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 295,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 296,
    "end": 297
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 297,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 299,
    "end": 300
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 301,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 307,
    "end": 308
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 313,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 314,
    "end": 315
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 315,
    "end": 316
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 321,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 324,
    "end": 325
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 325,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 326,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 328,
    "end": 329
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 338,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 339,
    "end": 340
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 340,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 342,
    "end": 343
  },
  {
    "type": "String",
    "value": "'hi'",
    "start": 344,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 353,
    "end": 354
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 359,
    "end": 365
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 366,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 368,
    "end": 369
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 448,
    "end": 451
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 452,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 457,
    "end": 458
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 459,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 460,
    "end": 461
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 461,
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
    "value": ".",
    "start": 466,
    "end": 467
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 467,
    "end": 468
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 470,
    "end": 478
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 479,
    "end": 480
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 480,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 481,
    "end": 482
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 483,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 485,
    "end": 486
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 487,
    "end": 488
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 488,
    "end": 489
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 489,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 491,
    "end": 492
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 493,
    "end": 495
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 496,
    "end": 497
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 497,
    "end": 498
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 498,
    "end": 499
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 501,
    "end": 503
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 504,
    "end": 505
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 505,
    "end": 506
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 506,
    "end": 507
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 507,
    "end": 512
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 512,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 514,
    "end": 515
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 520,
    "end": 521
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 521,
    "end": 522
  },
  {
    "type": "Identifier",
    "value": "q",
    "start": 522,
    "end": 523
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 524,
    "end": 525
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 526,
    "end": 531
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 532,
    "end": 533
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 534,
    "end": 535
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 535,
    "end": 536
  },
  {
    "type": "Identifier",
    "value": "q",
    "start": 536,
    "end": 537
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 538,
    "end": 540
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 541,
    "end": 542
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 542,
    "end": 543
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 543,
    "end": 544
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 544,
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
    "value": "{",
    "start": 551,
    "end": 552
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 557,
    "end": 558
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 558,
    "end": 559
  },
  {
    "type": "Identifier",
    "value": "q",
    "start": 559,
    "end": 560
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 561,
    "end": 562
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 563,
    "end": 568
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 569,
    "end": 570
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 571,
    "end": 575
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 576,
    "end": 577
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 582,
    "end": 583
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 583,
    "end": 584
  },
  {
    "type": "Identifier",
    "value": "q",
    "start": 584,
    "end": 585
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 586,
    "end": 587
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 588,
    "end": 592
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 593,
    "end": 594
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 595,
    "end": 596
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 596,
    "end": 597
  },
  {
    "type": "Identifier",
    "value": "q",
    "start": 597,
    "end": 598
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
    "type": "Punctuator",
    "value": "!",
    "start": 603,
    "end": 604
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 604,
    "end": 605
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 605,
    "end": 610
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 610,
    "end": 611
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 612,
    "end": 613
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 618,
    "end": 619
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 619,
    "end": 620
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 620,
    "end": 621
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 622,
    "end": 623
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 624,
    "end": 625
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 626,
    "end": 627
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 628,
    "end": 632
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 633,
    "end": 634
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 639,
    "end": 640
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 640,
    "end": 641
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 641,
    "end": 642
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 643,
    "end": 644
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 645,
    "end": 646
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 647,
    "end": 648
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 649,
    "end": 650
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 650,
    "end": 651
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 651,
    "end": 652
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 687,
    "end": 692
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 693,
    "end": 694
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 695,
    "end": 696
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 697,
    "end": 705
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 705,
    "end": 706
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 706,
    "end": 707
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 708,
    "end": 709
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 710,
    "end": 711
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 712,
    "end": 714
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 715,
    "end": 716
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 716,
    "end": 717
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 717,
    "end": 718
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 718,
    "end": 723
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 723,
    "end": 724
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 725,
    "end": 726
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 731,
    "end": 732
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 732,
    "end": 733
  },
  {
    "type": "Identifier",
    "value": "expando",
    "start": 733,
    "end": 740
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 741,
    "end": 742
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 743,
    "end": 744
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 745,
    "end": 746
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 747,
    "end": 748
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 748,
    "end": 749
  },
  {
    "type": "Identifier",
    "value": "expando",
    "start": 749,
    "end": 756
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 767,
    "end": 769
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 770,
    "end": 771
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 771,
    "end": 772
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 772,
    "end": 773
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 773,
    "end": 778
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 778,
    "end": 779
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 780,
    "end": 781
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 786,
    "end": 787
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 787,
    "end": 788
  },
  {
    "type": "Identifier",
    "value": "both",
    "start": 788,
    "end": 792
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 793,
    "end": 794
  },
  {
    "type": "String",
    "value": "'hi'",
    "start": 795,
    "end": 799
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 800,
    "end": 801
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 802,
    "end": 806
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 807,
    "end": 808
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 813,
    "end": 814
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 814,
    "end": 815
  },
  {
    "type": "Identifier",
    "value": "both",
    "start": 815,
    "end": 819
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 820,
    "end": 821
  },
  {
    "type": "Numeric",
    "value": "0",
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
    "type": "Identifier",
    "value": "g",
    "start": 826,
    "end": 827
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 827,
    "end": 828
  },
  {
    "type": "Identifier",
    "value": "both",
    "start": 828,
    "end": 832
  }
]
```
