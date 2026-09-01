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
        "name": "g",
        "optional": false,
        "typeAnnotation": null,
        "start": 58,
        "end": 59
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
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": "g",
              "raw": "\"g\"",
              "start": 71,
              "end": 74
            },
            "start": 64,
            "end": 75
          }
        ],
        "start": 62,
        "end": 77
      },
      "expression": false,
      "start": 49,
      "end": 77
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "objectLiteral1",
        "optional": false,
        "typeAnnotation": null,
        "start": 89,
        "end": 103
      },
      "generator": true,
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
                  "start": 118,
                  "end": 119
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
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 132,
                        "end": 133
                      },
                      "value": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 135,
                        "end": 136
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 132,
                      "end": 136
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 146,
                        "end": 147
                      },
                      "value": {
                        "type": "YieldExpression",
                        "delegate": false,
                        "argument": {
                          "type": "Literal",
                          "value": 2,
                          "raw": "2",
                          "start": 155,
                          "end": 156
                        },
                        "start": 149,
                        "end": 156
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 146,
                      "end": 156
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 166,
                        "end": 167
                      },
                      "value": {
                        "type": "Literal",
                        "value": 3,
                        "raw": "3",
                        "start": 169,
                        "end": 170
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 166,
                      "end": 170
                    }
                  ],
                  "start": 122,
                  "end": 177
                },
                "definite": false,
                "start": 118,
                "end": 177
              }
            ],
            "declare": false,
            "start": 112,
            "end": 177
          }
        ],
        "start": 106,
        "end": 179
      },
      "expression": false,
      "start": 79,
      "end": 179
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "objectLiteral2",
        "optional": false,
        "typeAnnotation": null,
        "start": 191,
        "end": 205
      },
      "generator": true,
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
                  "start": 220,
                  "end": 221
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
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 234,
                        "end": 235
                      },
                      "value": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 237,
                        "end": 238
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 234,
                      "end": 238
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "g",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 249,
                          "end": 250
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 249,
                        "end": 252
                      },
                      "value": {
                        "type": "YieldExpression",
                        "delegate": false,
                        "argument": {
                          "type": "Literal",
                          "value": 2,
                          "raw": "2",
                          "start": 261,
                          "end": 262
                        },
                        "start": 255,
                        "end": 262
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": true,
                      "optional": false,
                      "start": 248,
                      "end": 262
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 272,
                        "end": 273
                      },
                      "value": {
                        "type": "Literal",
                        "value": 3,
                        "raw": "3",
                        "start": 275,
                        "end": 276
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 272,
                      "end": 276
                    }
                  ],
                  "start": 224,
                  "end": 283
                },
                "definite": false,
                "start": 220,
                "end": 283
              }
            ],
            "declare": false,
            "start": 214,
            "end": 283
          }
        ],
        "start": 208,
        "end": 285
      },
      "expression": false,
      "start": 181,
      "end": 285
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "objectLiteral3",
        "optional": false,
        "typeAnnotation": null,
        "start": 297,
        "end": 311
      },
      "generator": true,
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
                  "start": 326,
                  "end": 327
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
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 340,
                        "end": 341
                      },
                      "value": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 343,
                        "end": 344
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 340,
                      "end": 344
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 354,
                        "end": 355
                      },
                      "value": {
                        "type": "YieldExpression",
                        "delegate": false,
                        "argument": {
                          "type": "Literal",
                          "value": 2,
                          "raw": "2",
                          "start": 363,
                          "end": 364
                        },
                        "start": 357,
                        "end": 364
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 354,
                      "end": 364
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "g",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 375,
                          "end": 376
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 375,
                        "end": 378
                      },
                      "value": {
                        "type": "Literal",
                        "value": 3,
                        "raw": "3",
                        "start": 381,
                        "end": 382
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": true,
                      "optional": false,
                      "start": 374,
                      "end": 382
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 392,
                        "end": 393
                      },
                      "value": {
                        "type": "Literal",
                        "value": 4,
                        "raw": "4",
                        "start": 395,
                        "end": 396
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 392,
                      "end": 396
                    }
                  ],
                  "start": 330,
                  "end": 403
                },
                "definite": false,
                "start": 326,
                "end": 403
              }
            ],
            "declare": false,
            "start": 320,
            "end": 403
          }
        ],
        "start": 314,
        "end": 405
      },
      "expression": false,
      "start": 287,
      "end": 405
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "objectLiteral4",
        "optional": false,
        "typeAnnotation": null,
        "start": 417,
        "end": 431
      },
      "generator": true,
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
                  "start": 446,
                  "end": 447
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
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 460,
                        "end": 461
                      },
                      "value": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 463,
                        "end": 464
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 460,
                      "end": 464
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "g",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 475,
                          "end": 476
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 475,
                        "end": 478
                      },
                      "value": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 481,
                        "end": 482
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": true,
                      "optional": false,
                      "start": 474,
                      "end": 482
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 492,
                        "end": 493
                      },
                      "value": {
                        "type": "YieldExpression",
                        "delegate": false,
                        "argument": {
                          "type": "Literal",
                          "value": 3,
                          "raw": "3",
                          "start": 501,
                          "end": 502
                        },
                        "start": 495,
                        "end": 502
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 492,
                      "end": 502
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 512,
                        "end": 513
                      },
                      "value": {
                        "type": "Literal",
                        "value": 4,
                        "raw": "4",
                        "start": 515,
                        "end": 516
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 512,
                      "end": 516
                    }
                  ],
                  "start": 450,
                  "end": 523
                },
                "definite": false,
                "start": 446,
                "end": 523
              }
            ],
            "declare": false,
            "start": 440,
            "end": 523
          }
        ],
        "start": 434,
        "end": 525
      },
      "expression": false,
      "start": 407,
      "end": 525
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "objectLiteral5",
        "optional": false,
        "typeAnnotation": null,
        "start": 537,
        "end": 551
      },
      "generator": true,
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
                  "start": 566,
                  "end": 567
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
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 580,
                        "end": 581
                      },
                      "value": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 583,
                        "end": 584
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 580,
                      "end": 584
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "g",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 595,
                          "end": 596
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 595,
                        "end": 598
                      },
                      "value": {
                        "type": "YieldExpression",
                        "delegate": false,
                        "argument": {
                          "type": "Literal",
                          "value": 2,
                          "raw": "2",
                          "start": 607,
                          "end": 608
                        },
                        "start": 601,
                        "end": 608
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": true,
                      "optional": false,
                      "start": 594,
                      "end": 608
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 618,
                        "end": 619
                      },
                      "value": {
                        "type": "Literal",
                        "value": 4,
                        "raw": "4",
                        "start": 621,
                        "end": 622
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 618,
                      "end": 622
                    }
                  ],
                  "start": 570,
                  "end": 629
                },
                "definite": false,
                "start": 566,
                "end": 629
              }
            ],
            "declare": false,
            "start": 560,
            "end": 629
          }
        ],
        "start": 554,
        "end": 631
      },
      "expression": false,
      "start": 527,
      "end": 631
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "objectLiteral6",
        "optional": false,
        "typeAnnotation": null,
        "start": 643,
        "end": 657
      },
      "generator": true,
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
                  "start": 672,
                  "end": 673
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
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 686,
                        "end": 687
                      },
                      "value": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 689,
                        "end": 690
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 686,
                      "end": 690
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "YieldExpression",
                        "delegate": false,
                        "argument": null,
                        "start": 701,
                        "end": 706
                      },
                      "value": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 709,
                        "end": 710
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": true,
                      "optional": false,
                      "start": 700,
                      "end": 710
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 720,
                        "end": 721
                      },
                      "value": {
                        "type": "Literal",
                        "value": 4,
                        "raw": "4",
                        "start": 723,
                        "end": 724
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 720,
                      "end": 724
                    }
                  ],
                  "start": 676,
                  "end": 731
                },
                "definite": false,
                "start": 672,
                "end": 731
              }
            ],
            "declare": false,
            "start": 666,
            "end": 731
          }
        ],
        "start": 660,
        "end": 733
      },
      "expression": false,
      "start": 633,
      "end": 733
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "objectLiteral7",
        "optional": false,
        "typeAnnotation": null,
        "start": 745,
        "end": 759
      },
      "generator": true,
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
                  "start": 774,
                  "end": 775
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
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 788,
                        "end": 789
                      },
                      "value": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 791,
                        "end": 792
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 788,
                      "end": 792
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "YieldExpression",
                        "delegate": false,
                        "argument": null,
                        "start": 803,
                        "end": 808
                      },
                      "value": {
                        "type": "YieldExpression",
                        "delegate": false,
                        "argument": {
                          "type": "Literal",
                          "value": 2,
                          "raw": "2",
                          "start": 817,
                          "end": 818
                        },
                        "start": 811,
                        "end": 818
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": true,
                      "optional": false,
                      "start": 802,
                      "end": 818
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 828,
                        "end": 829
                      },
                      "value": {
                        "type": "Literal",
                        "value": 4,
                        "raw": "4",
                        "start": 831,
                        "end": 832
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 828,
                      "end": 832
                    }
                  ],
                  "start": 778,
                  "end": 839
                },
                "definite": false,
                "start": 774,
                "end": 839
              }
            ],
            "declare": false,
            "start": 768,
            "end": 839
          }
        ],
        "start": 762,
        "end": 841
      },
      "expression": false,
      "start": 735,
      "end": 841
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 49,
  "end": 841
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 49,
    "end": 57
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 58,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 59,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 60,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 62,
    "end": 63
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 64,
    "end": 70
  },
  {
    "type": "String",
    "value": "\"g\"",
    "start": 71,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 74,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 76,
    "end": 77
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 79,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 87,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "objectLiteral1",
    "start": 89,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 103,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 104,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 106,
    "end": 107
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 112,
    "end": 117
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 118,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 120,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 122,
    "end": 123
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 132,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 133,
    "end": 134
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 135,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 136,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 146,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 147,
    "end": 148
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 149,
    "end": 154
  },
  {
    "type": "Numeric",
    "value": "2",
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
    "value": "c",
    "start": 166,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 167,
    "end": 168
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 169,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 170,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 176,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 178,
    "end": 179
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 181,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 189,
    "end": 190
  },
  {
    "type": "Identifier",
    "value": "objectLiteral2",
    "start": 191,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 205,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 206,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 208,
    "end": 209
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 214,
    "end": 219
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 220,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 222,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 224,
    "end": 225
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 234,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 235,
    "end": 236
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 237,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 238,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 248,
    "end": 249
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 249,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 250,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 251,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 252,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 253,
    "end": 254
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 255,
    "end": 260
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 261,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 262,
    "end": 263
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 272,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 273,
    "end": 274
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 275,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 276,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 282,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 284,
    "end": 285
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 287,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 295,
    "end": 296
  },
  {
    "type": "Identifier",
    "value": "objectLiteral3",
    "start": 297,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 311,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 312,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 314,
    "end": 315
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 320,
    "end": 325
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 326,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 328,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 330,
    "end": 331
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 340,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 341,
    "end": 342
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 343,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 344,
    "end": 345
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 354,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 355,
    "end": 356
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 357,
    "end": 362
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 363,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 364,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 374,
    "end": 375
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 375,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 376,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 377,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 378,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 379,
    "end": 380
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 381,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 382,
    "end": 383
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 392,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 393,
    "end": 394
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 395,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 396,
    "end": 397
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 402,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 404,
    "end": 405
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 407,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 415,
    "end": 416
  },
  {
    "type": "Identifier",
    "value": "objectLiteral4",
    "start": 417,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 431,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 432,
    "end": 433
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 434,
    "end": 435
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 440,
    "end": 445
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 446,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 448,
    "end": 449
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 450,
    "end": 451
  },
  {
    "type": "Identifier",
    "value": "a",
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
    "type": "Numeric",
    "value": "1",
    "start": 463,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 464,
    "end": 465
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 474,
    "end": 475
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 475,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 476,
    "end": 477
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 477,
    "end": 478
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 478,
    "end": 479
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 479,
    "end": 480
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 481,
    "end": 482
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 482,
    "end": 483
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 492,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 493,
    "end": 494
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 495,
    "end": 500
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 501,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 502,
    "end": 503
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 512,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 513,
    "end": 514
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 515,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 516,
    "end": 517
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 522,
    "end": 523
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 524,
    "end": 525
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 527,
    "end": 535
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 535,
    "end": 536
  },
  {
    "type": "Identifier",
    "value": "objectLiteral5",
    "start": 537,
    "end": 551
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 551,
    "end": 552
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 552,
    "end": 553
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 554,
    "end": 555
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 560,
    "end": 565
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 566,
    "end": 567
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 568,
    "end": 569
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 570,
    "end": 571
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 580,
    "end": 581
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 581,
    "end": 582
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 583,
    "end": 584
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 584,
    "end": 585
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 594,
    "end": 595
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 595,
    "end": 596
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 596,
    "end": 597
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 597,
    "end": 598
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 598,
    "end": 599
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 599,
    "end": 600
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 601,
    "end": 606
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 607,
    "end": 608
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 608,
    "end": 609
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 618,
    "end": 619
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 619,
    "end": 620
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 621,
    "end": 622
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 622,
    "end": 623
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 628,
    "end": 629
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 630,
    "end": 631
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 633,
    "end": 641
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 641,
    "end": 642
  },
  {
    "type": "Identifier",
    "value": "objectLiteral6",
    "start": 643,
    "end": 657
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 657,
    "end": 658
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 658,
    "end": 659
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 660,
    "end": 661
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 666,
    "end": 671
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 672,
    "end": 673
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 674,
    "end": 675
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 676,
    "end": 677
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 686,
    "end": 687
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 687,
    "end": 688
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 689,
    "end": 690
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 690,
    "end": 691
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 700,
    "end": 701
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 701,
    "end": 706
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 706,
    "end": 707
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 707,
    "end": 708
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 709,
    "end": 710
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 710,
    "end": 711
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 720,
    "end": 721
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 721,
    "end": 722
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 723,
    "end": 724
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 724,
    "end": 725
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 730,
    "end": 731
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 732,
    "end": 733
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 735,
    "end": 743
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 743,
    "end": 744
  },
  {
    "type": "Identifier",
    "value": "objectLiteral7",
    "start": 745,
    "end": 759
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 759,
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
    "value": "{",
    "start": 762,
    "end": 763
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 768,
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
    "value": "=",
    "start": 776,
    "end": 777
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 778,
    "end": 779
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 788,
    "end": 789
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 789,
    "end": 790
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 791,
    "end": 792
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 792,
    "end": 793
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 802,
    "end": 803
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 803,
    "end": 808
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 808,
    "end": 809
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 809,
    "end": 810
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 811,
    "end": 816
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 817,
    "end": 818
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 818,
    "end": 819
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 828,
    "end": 829
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 829,
    "end": 830
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 831,
    "end": 832
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 832,
    "end": 833
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 838,
    "end": 839
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 840,
    "end": 841
  }
]
```
