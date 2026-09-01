__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
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
                "name": "perf",
                "optional": false,
                "typeAnnotation": null,
                "start": 10,
                "end": 14
              },
              "init": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "window",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 17,
                  "end": 23
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "performance",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 24,
                  "end": 35
                },
                "optional": false,
                "computed": false,
                "start": 17,
                "end": 35
              },
              "definite": false,
              "start": 10,
              "end": 35
            }
          ],
          "declare": false,
          "start": 4,
          "end": 35
        },
        {
          "type": "IfStatement",
          "test": {
            "type": "LogicalExpression",
            "left": {
              "type": "LogicalExpression",
              "left": {
                "type": "LogicalExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "perf",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 64,
                  "end": 68
                },
                "operator": "&&",
                "right": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "perf",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 76,
                    "end": 80
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "measure",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 81,
                    "end": 88
                  },
                  "optional": false,
                  "computed": false,
                  "start": 76,
                  "end": 88
                },
                "start": 64,
                "end": 88
              },
              "operator": "&&",
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "perf",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 96,
                  "end": 100
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "clearMarks",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 101,
                  "end": 111
                },
                "optional": false,
                "computed": false,
                "start": 96,
                "end": 111
              },
              "start": 64,
              "end": 111
            },
            "operator": "&&",
            "right": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "perf",
                "optional": false,
                "typeAnnotation": null,
                "start": 119,
                "end": 123
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "clearMeasures",
                "optional": false,
                "typeAnnotation": null,
                "start": 124,
                "end": 137
              },
              "optional": false,
              "computed": false,
              "start": 119,
              "end": 137
            },
            "start": 64,
            "end": 137
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
                      "name": "perf",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 148,
                      "end": 152
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "measure",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 153,
                      "end": 160
                    },
                    "optional": false,
                    "computed": false,
                    "start": 148,
                    "end": 160
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "",
                      "raw": "\"\"",
                      "start": 161,
                      "end": 163
                    }
                  ],
                  "optional": false,
                  "start": 148,
                  "end": 164
                },
                "directive": null,
                "start": 148,
                "end": 165
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
                      "name": "perf",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 170,
                      "end": 174
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "clearMarks",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 175,
                      "end": 185
                    },
                    "optional": false,
                    "computed": false,
                    "start": 170,
                    "end": 185
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "",
                      "raw": "\"\"",
                      "start": 186,
                      "end": 188
                    }
                  ],
                  "optional": false,
                  "start": 170,
                  "end": 189
                },
                "directive": null,
                "start": 170,
                "end": 189
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
                      "name": "perf",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 194,
                      "end": 198
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "clearMeasures",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 199,
                      "end": 212
                    },
                    "optional": false,
                    "computed": false,
                    "start": 194,
                    "end": 212
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "",
                      "raw": "\"\"",
                      "start": 213,
                      "end": 215
                    }
                  ],
                  "optional": false,
                  "start": 194,
                  "end": 216
                },
                "directive": null,
                "start": 194,
                "end": 216
              }
            ],
            "start": 142,
            "end": 220
          },
          "alternate": null,
          "start": 55,
          "end": 220
        },
        {
          "type": "IfStatement",
          "test": {
            "type": "LogicalExpression",
            "left": {
              "type": "LogicalExpression",
              "left": {
                "type": "LogicalExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "perf",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 246,
                  "end": 250
                },
                "operator": "&&",
                "right": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "perf",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 258,
                    "end": 262
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "mark",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 263,
                    "end": 267
                  },
                  "optional": false,
                  "computed": false,
                  "start": 258,
                  "end": 267
                },
                "start": 246,
                "end": 267
              },
              "operator": "&&",
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "perf",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 275,
                  "end": 279
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "measure",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 280,
                  "end": 287
                },
                "optional": false,
                "computed": false,
                "start": 275,
                "end": 287
              },
              "start": 246,
              "end": 287
            },
            "operator": "||",
            "right": {
              "type": "UnaryExpression",
              "operator": "!",
              "argument": {
                "type": "UnaryExpression",
                "operator": "!",
                "argument": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 293,
                  "end": 297
                },
                "prefix": true,
                "start": 292,
                "end": 297
              },
              "prefix": true,
              "start": 291,
              "end": 297
            },
            "start": 246,
            "end": 297
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
                      "name": "perf",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 308,
                      "end": 312
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "mark",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 313,
                      "end": 317
                    },
                    "optional": false,
                    "computed": false,
                    "start": 308,
                    "end": 317
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "",
                      "raw": "\"\"",
                      "start": 318,
                      "end": 320
                    }
                  ],
                  "optional": false,
                  "start": 308,
                  "end": 321
                },
                "directive": null,
                "start": 308,
                "end": 322
              }
            ],
            "start": 302,
            "end": 326
          },
          "alternate": null,
          "start": 237,
          "end": 326
        },
        {
          "type": "IfStatement",
          "test": {
            "type": "LogicalExpression",
            "left": {
              "type": "LogicalExpression",
              "left": {
                "type": "LogicalExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "perf",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 360,
                  "end": 364
                },
                "operator": "&&",
                "right": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "perf",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 374,
                    "end": 378
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "mark",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 379,
                    "end": 383
                  },
                  "optional": false,
                  "computed": false,
                  "start": 374,
                  "end": 383
                },
                "start": 360,
                "end": 383
              },
              "operator": "&&",
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "perf",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 393,
                  "end": 397
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "measure",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 398,
                  "end": 405
                },
                "optional": false,
                "computed": false,
                "start": 393,
                "end": 405
              },
              "start": 360,
              "end": 405
            },
            "operator": "??",
            "right": {
              "type": "UnaryExpression",
              "operator": "!",
              "argument": {
                "type": "UnaryExpression",
                "operator": "!",
                "argument": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 417,
                  "end": 421
                },
                "prefix": true,
                "start": 416,
                "end": 421
              },
              "prefix": true,
              "start": 415,
              "end": 421
            },
            "start": 352,
            "end": 421
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
                      "name": "perf",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 432,
                      "end": 436
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "mark",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 437,
                      "end": 441
                    },
                    "optional": false,
                    "computed": false,
                    "start": 432,
                    "end": 441
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "",
                      "raw": "\"\"",
                      "start": 442,
                      "end": 444
                    }
                  ],
                  "optional": false,
                  "start": 432,
                  "end": 445
                },
                "directive": null,
                "start": 432,
                "end": 446
              }
            ],
            "start": 426,
            "end": 450
          },
          "alternate": null,
          "start": 343,
          "end": 450
        }
      ],
      "start": 0,
      "end": 452
    },
    {
      "type": "EmptyStatement",
      "start": 452,
      "end": 453
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
            "name": "inBrowser",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 497,
                "end": 504
              },
              "start": 495,
              "end": 504
            },
            "start": 486,
            "end": 504
          },
          "init": null,
          "definite": false,
          "start": 486,
          "end": 504
        }
      ],
      "declare": true,
      "start": 474,
      "end": 505
    },
    {
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
                "name": "mark",
                "optional": false,
                "typeAnnotation": null,
                "start": 514,
                "end": 518
              },
              "init": null,
              "definite": false,
              "start": 514,
              "end": 518
            }
          ],
          "declare": false,
          "start": 510,
          "end": 519
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
                "name": "measure",
                "optional": false,
                "typeAnnotation": null,
                "start": 526,
                "end": 533
              },
              "init": null,
              "definite": false,
              "start": 526,
              "end": 533
            }
          ],
          "declare": false,
          "start": 522,
          "end": 534
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
                "name": "perf",
                "optional": false,
                "typeAnnotation": null,
                "start": 543,
                "end": 547
              },
              "init": {
                "type": "LogicalExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "inBrowser",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 550,
                  "end": 559
                },
                "operator": "&&",
                "right": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "window",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 563,
                    "end": 569
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "performance",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 570,
                    "end": 581
                  },
                  "optional": false,
                  "computed": false,
                  "start": 563,
                  "end": 581
                },
                "start": 550,
                "end": 581
              },
              "definite": false,
              "start": 543,
              "end": 581
            }
          ],
          "declare": false,
          "start": 537,
          "end": 581
        },
        {
          "type": "IfStatement",
          "test": {
            "type": "LogicalExpression",
            "left": {
              "type": "LogicalExpression",
              "left": {
                "type": "LogicalExpression",
                "left": {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "perf",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 620,
                    "end": 624
                  },
                  "operator": "&&",
                  "right": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "perf",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 632,
                      "end": 636
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "mark",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 637,
                      "end": 641
                    },
                    "optional": false,
                    "computed": false,
                    "start": 632,
                    "end": 641
                  },
                  "start": 620,
                  "end": 641
                },
                "operator": "&&",
                "right": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "perf",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 649,
                    "end": 653
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "measure",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 654,
                    "end": 661
                  },
                  "optional": false,
                  "computed": false,
                  "start": 649,
                  "end": 661
                },
                "start": 620,
                "end": 661
              },
              "operator": "&&",
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "perf",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 669,
                  "end": 673
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "clearMarks",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 674,
                  "end": 684
                },
                "optional": false,
                "computed": false,
                "start": 669,
                "end": 684
              },
              "start": 620,
              "end": 684
            },
            "operator": "&&",
            "right": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "perf",
                "optional": false,
                "typeAnnotation": null,
                "start": 692,
                "end": 696
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "clearMeasures",
                "optional": false,
                "typeAnnotation": null,
                "start": 697,
                "end": 710
              },
              "optional": false,
              "computed": false,
              "start": 692,
              "end": 710
            },
            "start": 620,
            "end": 710
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
                    "name": "mark",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 721,
                    "end": 725
                  },
                  "right": {
                    "type": "ArrowFunctionExpression",
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "tag",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 729,
                        "end": 732
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "perf",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 737,
                          "end": 741
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "mark",
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
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "tag",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 747,
                          "end": 750
                        }
                      ],
                      "optional": false,
                      "start": 737,
                      "end": 751
                    },
                    "id": null,
                    "generator": false,
                    "start": 728,
                    "end": 751
                  },
                  "start": 721,
                  "end": 751
                },
                "directive": null,
                "start": 721,
                "end": 751
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "AssignmentExpression",
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "measure",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 756,
                    "end": 763
                  },
                  "right": {
                    "type": "ArrowFunctionExpression",
                    "expression": false,
                    "async": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "name",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 767,
                        "end": 771
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "startTag",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 773,
                        "end": 781
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "endTag",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 783,
                        "end": 789
                      }
                    ],
                    "returnType": null,
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
                                "name": "perf",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 802,
                                "end": 806
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "measure",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 807,
                                "end": 814
                              },
                              "optional": false,
                              "computed": false,
                              "start": 802,
                              "end": 814
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "name",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 815,
                                "end": 819
                              },
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "startTag",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 821,
                                "end": 829
                              },
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "endTag",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 831,
                                "end": 837
                              }
                            ],
                            "optional": false,
                            "start": 802,
                            "end": 838
                          },
                          "directive": null,
                          "start": 802,
                          "end": 838
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
                                "name": "perf",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 845,
                                "end": 849
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "clearMarks",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 850,
                                "end": 860
                              },
                              "optional": false,
                              "computed": false,
                              "start": 845,
                              "end": 860
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "startTag",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 861,
                                "end": 869
                              }
                            ],
                            "optional": false,
                            "start": 845,
                            "end": 870
                          },
                          "directive": null,
                          "start": 845,
                          "end": 870
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
                                "name": "perf",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 877,
                                "end": 881
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "clearMarks",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 882,
                                "end": 892
                              },
                              "optional": false,
                              "computed": false,
                              "start": 877,
                              "end": 892
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "endTag",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 893,
                                "end": 899
                              }
                            ],
                            "optional": false,
                            "start": 877,
                            "end": 900
                          },
                          "directive": null,
                          "start": 877,
                          "end": 900
                        }
                      ],
                      "start": 794,
                      "end": 940
                    },
                    "id": null,
                    "generator": false,
                    "start": 766,
                    "end": 940
                  },
                  "start": 756,
                  "end": 940
                },
                "directive": null,
                "start": 756,
                "end": 940
              }
            ],
            "start": 715,
            "end": 944
          },
          "alternate": null,
          "start": 611,
          "end": 944
        }
      ],
      "start": 506,
      "end": 946
    },
    {
      "type": "EmptyStatement",
      "start": 946,
      "end": 947
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
            "name": "_isMobile",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 964,
                "end": 971
              },
              "start": 962,
              "end": 971
            },
            "start": 953,
            "end": 971
          },
          "init": null,
          "definite": false,
          "start": 953,
          "end": 971
        }
      ],
      "declare": false,
      "start": 949,
      "end": 972
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isMobile",
        "optional": false,
        "typeAnnotation": null,
        "start": 982,
        "end": 990
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
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "_isMobile",
                "optional": false,
                "typeAnnotation": null,
                "start": 1001,
                "end": 1010
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 1015,
                "end": 1024
              },
              "start": 1001,
              "end": 1024
            },
            "consequent": {
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
                        "name": "isMobileMatch",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1038,
                        "end": 1051
                      },
                      "init": {
                        "type": "LogicalExpression",
                        "left": {
                          "type": "LogicalExpression",
                          "left": {
                            "type": "BinaryExpression",
                            "left": {
                              "type": "UnaryExpression",
                              "operator": "typeof",
                              "argument": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "window",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1067,
                                "end": 1073
                              },
                              "prefix": true,
                              "start": 1060,
                              "end": 1073
                            },
                            "operator": "!==",
                            "right": {
                              "type": "Literal",
                              "value": "undefined",
                              "raw": "'undefined'",
                              "start": 1078,
                              "end": 1089
                            },
                            "start": 1060,
                            "end": 1089
                          },
                          "operator": "&&",
                          "right": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "window",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1099,
                              "end": 1105
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "matchMedia",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1106,
                              "end": 1116
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1099,
                            "end": 1116
                          },
                          "start": 1060,
                          "end": 1116
                        },
                        "operator": "&&",
                        "right": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "window",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1138,
                              "end": 1144
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "matchMedia",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1145,
                              "end": 1155
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1138,
                            "end": 1155
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Literal",
                              "value": "(max-device-width: 680px)",
                              "raw": "'(max-device-width: 680px)'",
                              "start": 1156,
                              "end": 1183
                            }
                          ],
                          "optional": false,
                          "start": 1138,
                          "end": 1184
                        },
                        "start": 1060,
                        "end": 1184
                      },
                      "definite": false,
                      "start": 1038,
                      "end": 1184
                    }
                  ],
                  "declare": false,
                  "start": 1032,
                  "end": 1185
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "_isMobile",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1190,
                      "end": 1199
                    },
                    "right": {
                      "type": "LogicalExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "isMobileMatch",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1202,
                        "end": 1215
                      },
                      "operator": "&&",
                      "right": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "isMobileMatch",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1219,
                          "end": 1232
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "matches",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1233,
                          "end": 1240
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1219,
                        "end": 1240
                      },
                      "start": 1202,
                      "end": 1240
                    },
                    "start": 1190,
                    "end": 1240
                  },
                  "directive": null,
                  "start": 1190,
                  "end": 1241
                }
              ],
              "start": 1026,
              "end": 1245
            },
            "alternate": null,
            "start": 997,
            "end": 1245
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "_isMobile",
              "optional": false,
              "typeAnnotation": null,
              "start": 1255,
              "end": 1264
            },
            "start": 1248,
            "end": 1265
          }
        ],
        "start": 993,
        "end": 1267
      },
      "expression": false,
      "start": 973,
      "end": 1267
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1267
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Punctuator",
    "value": "{",
    "start": 0,
    "end": 1
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 4,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "perf",
    "start": 10,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 15,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "window",
    "start": 17,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 23,
    "end": 24
  },
  {
    "type": "Identifier",
    "value": "performance",
    "start": 24,
    "end": 35
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 55,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 58,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "perf",
    "start": 64,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 69,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "perf",
    "start": 76,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 80,
    "end": 81
  },
  {
    "type": "Identifier",
    "value": "measure",
    "start": 81,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 89,
    "end": 91
  },
  {
    "type": "Identifier",
    "value": "perf",
    "start": 96,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 100,
    "end": 101
  },
  {
    "type": "Identifier",
    "value": "clearMarks",
    "start": 101,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 112,
    "end": 114
  },
  {
    "type": "Identifier",
    "value": "perf",
    "start": 119,
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
    "value": "clearMeasures",
    "start": 124,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 140,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 142,
    "end": 143
  },
  {
    "type": "Identifier",
    "value": "perf",
    "start": 148,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 152,
    "end": 153
  },
  {
    "type": "Identifier",
    "value": "measure",
    "start": 153,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 160,
    "end": 161
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 161,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 163,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 164,
    "end": 165
  },
  {
    "type": "Identifier",
    "value": "perf",
    "start": 170,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 174,
    "end": 175
  },
  {
    "type": "Identifier",
    "value": "clearMarks",
    "start": 175,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 185,
    "end": 186
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 186,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 188,
    "end": 189
  },
  {
    "type": "Identifier",
    "value": "perf",
    "start": 194,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 198,
    "end": 199
  },
  {
    "type": "Identifier",
    "value": "clearMeasures",
    "start": 199,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 212,
    "end": 213
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 213,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 215,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 219,
    "end": 220
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 237,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 240,
    "end": 241
  },
  {
    "type": "Identifier",
    "value": "perf",
    "start": 246,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 251,
    "end": 253
  },
  {
    "type": "Identifier",
    "value": "perf",
    "start": 258,
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
    "value": "mark",
    "start": 263,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 268,
    "end": 270
  },
  {
    "type": "Identifier",
    "value": "perf",
    "start": 275,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 279,
    "end": 280
  },
  {
    "type": "Identifier",
    "value": "measure",
    "start": 280,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 288,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 291,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 292,
    "end": 293
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 293,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 300,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 302,
    "end": 303
  },
  {
    "type": "Identifier",
    "value": "perf",
    "start": 308,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 312,
    "end": 313
  },
  {
    "type": "Identifier",
    "value": "mark",
    "start": 313,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 317,
    "end": 318
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 318,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 320,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 321,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 325,
    "end": 326
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 343,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 346,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 352,
    "end": 353
  },
  {
    "type": "Identifier",
    "value": "perf",
    "start": 360,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 365,
    "end": 367
  },
  {
    "type": "Identifier",
    "value": "perf",
    "start": 374,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 378,
    "end": 379
  },
  {
    "type": "Identifier",
    "value": "mark",
    "start": 379,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 384,
    "end": 386
  },
  {
    "type": "Identifier",
    "value": "perf",
    "start": 393,
    "end": 397
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 397,
    "end": 398
  },
  {
    "type": "Identifier",
    "value": "measure",
    "start": 398,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 410,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": "??",
    "start": 412,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 415,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 416,
    "end": 417
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 417,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 424,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 426,
    "end": 427
  },
  {
    "type": "Identifier",
    "value": "perf",
    "start": 432,
    "end": 436
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 436,
    "end": 437
  },
  {
    "type": "Identifier",
    "value": "mark",
    "start": 437,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 441,
    "end": 442
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 442,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 444,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 445,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 449,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 451,
    "end": 452
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 452,
    "end": 453
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 474,
    "end": 481
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 482,
    "end": 485
  },
  {
    "type": "Identifier",
    "value": "inBrowser",
    "start": 486,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 495,
    "end": 496
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 497,
    "end": 504
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 504,
    "end": 505
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 506,
    "end": 507
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 510,
    "end": 513
  },
  {
    "type": "Identifier",
    "value": "mark",
    "start": 514,
    "end": 518
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 518,
    "end": 519
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 522,
    "end": 525
  },
  {
    "type": "Identifier",
    "value": "measure",
    "start": 526,
    "end": 533
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 533,
    "end": 534
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 537,
    "end": 542
  },
  {
    "type": "Identifier",
    "value": "perf",
    "start": 543,
    "end": 547
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 548,
    "end": 549
  },
  {
    "type": "Identifier",
    "value": "inBrowser",
    "start": 550,
    "end": 559
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 560,
    "end": 562
  },
  {
    "type": "Identifier",
    "value": "window",
    "start": 563,
    "end": 569
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 569,
    "end": 570
  },
  {
    "type": "Identifier",
    "value": "performance",
    "start": 570,
    "end": 581
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 611,
    "end": 613
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 614,
    "end": 615
  },
  {
    "type": "Identifier",
    "value": "perf",
    "start": 620,
    "end": 624
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 625,
    "end": 627
  },
  {
    "type": "Identifier",
    "value": "perf",
    "start": 632,
    "end": 636
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 636,
    "end": 637
  },
  {
    "type": "Identifier",
    "value": "mark",
    "start": 637,
    "end": 641
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 642,
    "end": 644
  },
  {
    "type": "Identifier",
    "value": "perf",
    "start": 649,
    "end": 653
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 653,
    "end": 654
  },
  {
    "type": "Identifier",
    "value": "measure",
    "start": 654,
    "end": 661
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 662,
    "end": 664
  },
  {
    "type": "Identifier",
    "value": "perf",
    "start": 669,
    "end": 673
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 673,
    "end": 674
  },
  {
    "type": "Identifier",
    "value": "clearMarks",
    "start": 674,
    "end": 684
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 685,
    "end": 687
  },
  {
    "type": "Identifier",
    "value": "perf",
    "start": 692,
    "end": 696
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 696,
    "end": 697
  },
  {
    "type": "Identifier",
    "value": "clearMeasures",
    "start": 697,
    "end": 710
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 713,
    "end": 714
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 715,
    "end": 716
  },
  {
    "type": "Identifier",
    "value": "mark",
    "start": 721,
    "end": 725
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 726,
    "end": 727
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 728,
    "end": 729
  },
  {
    "type": "Identifier",
    "value": "tag",
    "start": 729,
    "end": 732
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 732,
    "end": 733
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 734,
    "end": 736
  },
  {
    "type": "Identifier",
    "value": "perf",
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
    "value": "mark",
    "start": 742,
    "end": 746
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 746,
    "end": 747
  },
  {
    "type": "Identifier",
    "value": "tag",
    "start": 747,
    "end": 750
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 750,
    "end": 751
  },
  {
    "type": "Identifier",
    "value": "measure",
    "start": 756,
    "end": 763
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 764,
    "end": 765
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 766,
    "end": 767
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 767,
    "end": 771
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 771,
    "end": 772
  },
  {
    "type": "Identifier",
    "value": "startTag",
    "start": 773,
    "end": 781
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 781,
    "end": 782
  },
  {
    "type": "Identifier",
    "value": "endTag",
    "start": 783,
    "end": 789
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 789,
    "end": 790
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 791,
    "end": 793
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 794,
    "end": 795
  },
  {
    "type": "Identifier",
    "value": "perf",
    "start": 802,
    "end": 806
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 806,
    "end": 807
  },
  {
    "type": "Identifier",
    "value": "measure",
    "start": 807,
    "end": 814
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 814,
    "end": 815
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 815,
    "end": 819
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 819,
    "end": 820
  },
  {
    "type": "Identifier",
    "value": "startTag",
    "start": 821,
    "end": 829
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 829,
    "end": 830
  },
  {
    "type": "Identifier",
    "value": "endTag",
    "start": 831,
    "end": 837
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 837,
    "end": 838
  },
  {
    "type": "Identifier",
    "value": "perf",
    "start": 845,
    "end": 849
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 849,
    "end": 850
  },
  {
    "type": "Identifier",
    "value": "clearMarks",
    "start": 850,
    "end": 860
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 860,
    "end": 861
  },
  {
    "type": "Identifier",
    "value": "startTag",
    "start": 861,
    "end": 869
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 869,
    "end": 870
  },
  {
    "type": "Identifier",
    "value": "perf",
    "start": 877,
    "end": 881
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 881,
    "end": 882
  },
  {
    "type": "Identifier",
    "value": "clearMarks",
    "start": 882,
    "end": 892
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 892,
    "end": 893
  },
  {
    "type": "Identifier",
    "value": "endTag",
    "start": 893,
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
    "value": "}",
    "start": 939,
    "end": 940
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 943,
    "end": 944
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 945,
    "end": 946
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 946,
    "end": 947
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 949,
    "end": 952
  },
  {
    "type": "Identifier",
    "value": "_isMobile",
    "start": 953,
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
    "value": "boolean",
    "start": 964,
    "end": 971
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 971,
    "end": 972
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 973,
    "end": 981
  },
  {
    "type": "Identifier",
    "value": "isMobile",
    "start": 982,
    "end": 990
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 990,
    "end": 991
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 991,
    "end": 992
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 993,
    "end": 994
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 997,
    "end": 999
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1000,
    "end": 1001
  },
  {
    "type": "Identifier",
    "value": "_isMobile",
    "start": 1001,
    "end": 1010
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1011,
    "end": 1014
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1015,
    "end": 1024
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1024,
    "end": 1025
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1026,
    "end": 1027
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1032,
    "end": 1037
  },
  {
    "type": "Identifier",
    "value": "isMobileMatch",
    "start": 1038,
    "end": 1051
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1052,
    "end": 1053
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1060,
    "end": 1066
  },
  {
    "type": "Identifier",
    "value": "window",
    "start": 1067,
    "end": 1073
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 1074,
    "end": 1077
  },
  {
    "type": "String",
    "value": "'undefined'",
    "start": 1078,
    "end": 1089
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1090,
    "end": 1092
  },
  {
    "type": "Identifier",
    "value": "window",
    "start": 1099,
    "end": 1105
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1105,
    "end": 1106
  },
  {
    "type": "Identifier",
    "value": "matchMedia",
    "start": 1106,
    "end": 1116
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1117,
    "end": 1119
  },
  {
    "type": "Identifier",
    "value": "window",
    "start": 1138,
    "end": 1144
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1144,
    "end": 1145
  },
  {
    "type": "Identifier",
    "value": "matchMedia",
    "start": 1145,
    "end": 1155
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1155,
    "end": 1156
  },
  {
    "type": "String",
    "value": "'(max-device-width: 680px)'",
    "start": 1156,
    "end": 1183
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1183,
    "end": 1184
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1184,
    "end": 1185
  },
  {
    "type": "Identifier",
    "value": "_isMobile",
    "start": 1190,
    "end": 1199
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1200,
    "end": 1201
  },
  {
    "type": "Identifier",
    "value": "isMobileMatch",
    "start": 1202,
    "end": 1215
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1216,
    "end": 1218
  },
  {
    "type": "Identifier",
    "value": "isMobileMatch",
    "start": 1219,
    "end": 1232
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1232,
    "end": 1233
  },
  {
    "type": "Identifier",
    "value": "matches",
    "start": 1233,
    "end": 1240
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1240,
    "end": 1241
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1244,
    "end": 1245
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1248,
    "end": 1254
  },
  {
    "type": "Identifier",
    "value": "_isMobile",
    "start": 1255,
    "end": 1264
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1264,
    "end": 1265
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1266,
    "end": 1267
  }
]
```
