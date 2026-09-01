__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
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
            "name": "identity",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 14
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 18,
                "end": 19
              }
            ],
            "returnType": null,
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 24,
              "end": 25
            },
            "id": null,
            "generator": false,
            "start": 17,
            "end": 25
          },
          "definite": false,
          "start": 6,
          "end": 25
        }
      ],
      "declare": false,
      "start": 0,
      "end": 26
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
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 34,
            "end": 35
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "identity",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 58,
                    "end": 66
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
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 73,
                            "end": 74
                          },
                          "value": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 76,
                            "end": 77
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 73,
                          "end": 77
                        }
                      ],
                      "start": 67,
                      "end": 81
                    }
                  ],
                  "optional": false,
                  "start": 58,
                  "end": 82
                },
                "start": 42,
                "end": 82
              }
            ],
            "start": 38,
            "end": 84
          },
          "definite": false,
          "start": 34,
          "end": 84
        }
      ],
      "declare": false,
      "start": 28,
      "end": 85
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
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 93,
            "end": 94
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "identity",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 120,
                    "end": 128
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
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 135,
                            "end": 136
                          },
                          "value": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 138,
                            "end": 139
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 135,
                          "end": 139
                        }
                      ],
                      "start": 129,
                      "end": 143
                    }
                  ],
                  "optional": false,
                  "start": 120,
                  "end": 144
                },
                "start": 101,
                "end": 144
              }
            ],
            "start": 97,
            "end": 146
          },
          "definite": false,
          "start": 93,
          "end": 146
        }
      ],
      "declare": false,
      "start": 87,
      "end": 147
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
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 155,
            "end": 156
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "identity",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 185,
                    "end": 193
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
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 200,
                            "end": 201
                          },
                          "value": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 203,
                            "end": 204
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 200,
                          "end": 204
                        }
                      ],
                      "start": 194,
                      "end": 208
                    }
                  ],
                  "optional": false,
                  "start": 185,
                  "end": 209
                },
                "start": 163,
                "end": 209
              }
            ],
            "start": 159,
            "end": 211
          },
          "definite": false,
          "start": 155,
          "end": 211
        }
      ],
      "declare": false,
      "start": 149,
      "end": 212
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
            "name": "d",
            "optional": false,
            "typeAnnotation": null,
            "start": 220,
            "end": 221
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "identity",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 247,
                    "end": 255
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
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 262,
                            "end": 263
                          },
                          "value": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 265,
                            "end": 266
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 262,
                          "end": 266
                        }
                      ],
                      "start": 256,
                      "end": 270
                    }
                  ],
                  "optional": false,
                  "start": 247,
                  "end": 271
                },
                "start": 228,
                "end": 271
              }
            ],
            "start": 224,
            "end": 273
          },
          "definite": false,
          "start": 220,
          "end": 273
        }
      ],
      "declare": false,
      "start": 214,
      "end": 274
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "e",
        "optional": false,
        "typeAnnotation": null,
        "start": 285,
        "end": 286
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
            "name": "args",
            "optional": false,
            "typeAnnotation": null,
            "start": 306,
            "end": 310
          },
          "optional": false,
          "typeAnnotation": null,
          "value": null,
          "start": 288,
          "end": 310
        }
      ],
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
                  "type": "ArrayPattern",
                  "decorators": [],
                  "elements": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ea",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 323,
                      "end": 325
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "eb",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 327,
                      "end": 329
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 322,
                  "end": 330
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "args",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 354,
                        "end": 358
                      },
                      "start": 334,
                      "end": 358
                    }
                  ],
                  "start": 333,
                  "end": 359
                },
                "definite": false,
                "start": 322,
                "end": 359
              }
            ],
            "declare": false,
            "start": 316,
            "end": 360
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "args",
                "optional": false,
                "typeAnnotation": null,
                "start": 370,
                "end": 374
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "length",
                "optional": false,
                "typeAnnotation": null,
                "start": 375,
                "end": 381
              },
              "optional": false,
              "computed": false,
              "start": 370,
              "end": 381
            },
            "start": 363,
            "end": 382
          }
        ],
        "start": 312,
        "end": 384
      },
      "expression": false,
      "start": 276,
      "end": 384
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 395,
        "end": 396
      },
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
          "start": 401,
          "end": 406
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
            "start": 428,
            "end": 432
          },
          "optional": false,
          "typeAnnotation": null,
          "value": null,
          "start": 410,
          "end": 432
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
                "type": "Identifier",
                "decorators": [],
                "name": "rest",
                "optional": false,
                "typeAnnotation": null,
                "start": 446,
                "end": 450
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "length",
                "optional": false,
                "typeAnnotation": null,
                "start": 451,
                "end": 457
              },
              "optional": false,
              "computed": false,
              "start": 446,
              "end": 457
            },
            "start": 439,
            "end": 458
          }
        ],
        "start": 435,
        "end": 460
      },
      "expression": false,
      "start": 386,
      "end": 460
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null,
        "start": 471,
        "end": 472
      },
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
          "start": 477,
          "end": 482
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
            "start": 507,
            "end": 511
          },
          "optional": false,
          "typeAnnotation": null,
          "value": null,
          "start": 486,
          "end": 511
        }
      ],
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
                  "type": "ArrayPattern",
                  "decorators": [],
                  "elements": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ga",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 525,
                      "end": 527
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "gb",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 529,
                      "end": 531
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 524,
                  "end": 532
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "rest",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 561,
                        "end": 565
                      },
                      "start": 536,
                      "end": 565
                    }
                  ],
                  "start": 535,
                  "end": 569
                },
                "definite": false,
                "start": 524,
                "end": 569
              }
            ],
            "declare": false,
            "start": 518,
            "end": 569
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "rest",
                "optional": false,
                "typeAnnotation": null,
                "start": 579,
                "end": 583
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "length",
                "optional": false,
                "typeAnnotation": null,
                "start": 584,
                "end": 590
              },
              "optional": false,
              "computed": false,
              "start": 579,
              "end": 590
            },
            "start": 572,
            "end": 591
          }
        ],
        "start": 514,
        "end": 593
      },
      "expression": false,
      "start": 462,
      "end": 593
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
            "name": "h",
            "optional": false,
            "typeAnnotation": null,
            "start": 601,
            "end": 602
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "args",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 624,
                  "end": 628
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null,
                "start": 606,
                "end": 628
              }
            ],
            "returnType": null,
            "body": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "args",
                "optional": false,
                "typeAnnotation": null,
                "start": 633,
                "end": 637
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "length",
                "optional": false,
                "typeAnnotation": null,
                "start": 638,
                "end": 644
              },
              "optional": false,
              "computed": false,
              "start": 633,
              "end": 644
            },
            "id": null,
            "generator": false,
            "start": 605,
            "end": 644
          },
          "definite": false,
          "start": 601,
          "end": 644
        }
      ],
      "declare": false,
      "start": 595,
      "end": 645
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
            "name": "i",
            "optional": false,
            "typeAnnotation": null,
            "start": 653,
            "end": 654
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "first",
                "optional": false,
                "typeAnnotation": null,
                "start": 661,
                "end": 666
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
                  "start": 686,
                  "end": 690
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null,
                "start": 668,
                "end": 690
              }
            ],
            "returnType": null,
            "body": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "rest",
                "optional": false,
                "typeAnnotation": null,
                "start": 696,
                "end": 700
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "length",
                "optional": false,
                "typeAnnotation": null,
                "start": 701,
                "end": 707
              },
              "optional": false,
              "computed": false,
              "start": 696,
              "end": 707
            },
            "id": null,
            "generator": false,
            "start": 657,
            "end": 707
          },
          "definite": false,
          "start": 653,
          "end": 707
        }
      ],
      "declare": false,
      "start": 647,
      "end": 708
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
            "name": "j",
            "optional": false,
            "typeAnnotation": null,
            "start": 716,
            "end": 717
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "first",
                "optional": false,
                "typeAnnotation": null,
                "start": 724,
                "end": 729
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
                  "start": 754,
                  "end": 758
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null,
                "start": 733,
                "end": 758
              }
            ],
            "returnType": null,
            "body": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "rest",
                "optional": false,
                "typeAnnotation": null,
                "start": 764,
                "end": 768
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "length",
                "optional": false,
                "typeAnnotation": null,
                "start": 769,
                "end": 775
              },
              "optional": false,
              "computed": false,
              "start": 764,
              "end": 775
            },
            "id": null,
            "generator": false,
            "start": 720,
            "end": 775
          },
          "definite": false,
          "start": 716,
          "end": 775
        }
      ],
      "declare": false,
      "start": 710,
      "end": 776
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "k",
        "optional": false,
        "typeAnnotation": null,
        "start": 787,
        "end": 788
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ObjectPattern",
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "first",
                "optional": false,
                "typeAnnotation": null,
                "start": 794,
                "end": 799
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "first",
                "optional": false,
                "typeAnnotation": null,
                "start": 794,
                "end": 799
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 794,
              "end": 799
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
              "start": 803,
              "end": 825
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 790,
          "end": 827
        }
      ],
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
                  "type": "ObjectPattern",
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ka",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 841,
                        "end": 843
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ka",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 841,
                        "end": 843
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false,
                      "start": 841,
                      "end": 843
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "kb",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 845,
                        "end": 847
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "kb",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 845,
                        "end": 847
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false,
                      "start": 845,
                      "end": 847
                    },
                    {
                      "type": "RestElement",
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "remaining",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 868,
                        "end": 877
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null,
                      "start": 849,
                      "end": 877
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 839,
                  "end": 879
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "rest",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 882,
                  "end": 886
                },
                "definite": false,
                "start": 839,
                "end": 886
              }
            ],
            "declare": false,
            "start": 833,
            "end": 887
          },
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "ObjectPattern",
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "kc",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 902,
                        "end": 904
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "kc",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 902,
                        "end": 904
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false,
                      "start": 902,
                      "end": 904
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "kd",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 910,
                        "end": 912
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "kd",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 910,
                        "end": 912
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false,
                      "start": 910,
                      "end": 912
                    },
                    {
                      "type": "RestElement",
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "remaining2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 943,
                        "end": 953
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null,
                      "start": 918,
                      "end": 953
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 896,
                  "end": 957
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "rest",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 960,
                  "end": 964
                },
                "definite": false,
                "start": 896,
                "end": 964
              }
            ],
            "declare": false,
            "start": 890,
            "end": 965
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "remaining",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1003,
                    "end": 1012
                  },
                  "start": 977,
                  "end": 1012
                }
              ],
              "start": 975,
              "end": 1014
            },
            "start": 968,
            "end": 1015
          }
        ],
        "start": 829,
        "end": 1017
      },
      "expression": false,
      "start": 778,
      "end": 1017
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1017
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 0,
    "end": 5
  },
  {
    "type": "Identifier",
    "value": "identity",
    "start": 6,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 15,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 17,
    "end": 18
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 18,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 19,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 21,
    "end": 23
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 24,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 25,
    "end": 26
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 28,
    "end": 33
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 34,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 42,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "identity",
    "start": 58,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 66,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 67,
    "end": 68
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 73,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 74,
    "end": 75
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 76,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "value": "}",
    "start": 83,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 84,
    "end": 85
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 87,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 93,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 95,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 97,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 101,
    "end": 104
  },
  {
    "type": "Identifier",
    "value": "identity",
    "start": 120,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 128,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 129,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 135,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 136,
    "end": 137
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 138,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 142,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "const",
    "start": 149,
    "end": 154
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 155,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 157,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 159,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 163,
    "end": 166
  },
  {
    "type": "Identifier",
    "value": "identity",
    "start": 185,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 193,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 194,
    "end": 195
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 200,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 201,
    "end": 202
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 203,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 207,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 208,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 210,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 211,
    "end": 212
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 214,
    "end": 219
  },
  {
    "type": "Identifier",
    "value": "d",
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
    "type": "Punctuator",
    "value": "...",
    "start": 228,
    "end": 231
  },
  {
    "type": "Identifier",
    "value": "identity",
    "start": 247,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 255,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 256,
    "end": 257
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 262,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 263,
    "end": 264
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 265,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 269,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 270,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 272,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 273,
    "end": 274
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 276,
    "end": 284
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 285,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 287,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 288,
    "end": 291
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 306,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 310,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 312,
    "end": 313
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 316,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 322,
    "end": 323
  },
  {
    "type": "Identifier",
    "value": "ea",
    "start": 323,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 325,
    "end": 326
  },
  {
    "type": "Identifier",
    "value": "eb",
    "start": 327,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 329,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 331,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 333,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 334,
    "end": 337
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 354,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 358,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 359,
    "end": 360
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 363,
    "end": 369
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 370,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 374,
    "end": 375
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 375,
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
    "start": 383,
    "end": 384
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 386,
    "end": 394
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 395,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 397,
    "end": 398
  },
  {
    "type": "Identifier",
    "value": "first",
    "start": 401,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 406,
    "end": 407
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 410,
    "end": 413
  },
  {
    "type": "Identifier",
    "value": "rest",
    "start": 428,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 433,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 435,
    "end": 436
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 439,
    "end": 445
  },
  {
    "type": "Identifier",
    "value": "rest",
    "start": 446,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 450,
    "end": 451
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 451,
    "end": 457
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 457,
    "end": 458
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 459,
    "end": 460
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 462,
    "end": 470
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 471,
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
    "start": 477,
    "end": 482
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 482,
    "end": 483
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 486,
    "end": 489
  },
  {
    "type": "Identifier",
    "value": "rest",
    "start": 507,
    "end": 511
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
    "type": "Keyword",
    "value": "const",
    "start": 518,
    "end": 523
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 524,
    "end": 525
  },
  {
    "type": "Identifier",
    "value": "ga",
    "start": 525,
    "end": 527
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 527,
    "end": 528
  },
  {
    "type": "Identifier",
    "value": "gb",
    "start": 529,
    "end": 531
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 531,
    "end": 532
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 533,
    "end": 534
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 535,
    "end": 536
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 536,
    "end": 539
  },
  {
    "type": "Identifier",
    "value": "rest",
    "start": 561,
    "end": 565
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 568,
    "end": 569
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 572,
    "end": 578
  },
  {
    "type": "Identifier",
    "value": "rest",
    "start": 579,
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
    "value": "length",
    "start": 584,
    "end": 590
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 590,
    "end": 591
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 592,
    "end": 593
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 595,
    "end": 600
  },
  {
    "type": "Identifier",
    "value": "h",
    "start": 601,
    "end": 602
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 603,
    "end": 604
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 605,
    "end": 606
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 606,
    "end": 609
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 624,
    "end": 628
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 628,
    "end": 629
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 630,
    "end": 632
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 633,
    "end": 637
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 637,
    "end": 638
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 638,
    "end": 644
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 644,
    "end": 645
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 647,
    "end": 652
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 653,
    "end": 654
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 655,
    "end": 656
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 657,
    "end": 658
  },
  {
    "type": "Identifier",
    "value": "first",
    "start": 661,
    "end": 666
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 666,
    "end": 667
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 668,
    "end": 671
  },
  {
    "type": "Identifier",
    "value": "rest",
    "start": 686,
    "end": 690
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 691,
    "end": 692
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 693,
    "end": 695
  },
  {
    "type": "Identifier",
    "value": "rest",
    "start": 696,
    "end": 700
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 700,
    "end": 701
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 701,
    "end": 707
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 707,
    "end": 708
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 710,
    "end": 715
  },
  {
    "type": "Identifier",
    "value": "j",
    "start": 716,
    "end": 717
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 718,
    "end": 719
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 720,
    "end": 721
  },
  {
    "type": "Identifier",
    "value": "first",
    "start": 724,
    "end": 729
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 729,
    "end": 730
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 733,
    "end": 736
  },
  {
    "type": "Identifier",
    "value": "rest",
    "start": 754,
    "end": 758
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 759,
    "end": 760
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 761,
    "end": 763
  },
  {
    "type": "Identifier",
    "value": "rest",
    "start": 764,
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
    "value": "length",
    "start": 769,
    "end": 775
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 775,
    "end": 776
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 778,
    "end": 786
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 787,
    "end": 788
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 789,
    "end": 790
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 790,
    "end": 791
  },
  {
    "type": "Identifier",
    "value": "first",
    "start": 794,
    "end": 799
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 799,
    "end": 800
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 803,
    "end": 806
  },
  {
    "type": "Identifier",
    "value": "rest",
    "start": 821,
    "end": 825
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 826,
    "end": 827
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 827,
    "end": 828
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 829,
    "end": 830
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 833,
    "end": 838
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 839,
    "end": 840
  },
  {
    "type": "Identifier",
    "value": "ka",
    "start": 841,
    "end": 843
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 843,
    "end": 844
  },
  {
    "type": "Identifier",
    "value": "kb",
    "start": 845,
    "end": 847
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 847,
    "end": 848
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 849,
    "end": 852
  },
  {
    "type": "Identifier",
    "value": "remaining",
    "start": 868,
    "end": 877
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 878,
    "end": 879
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 880,
    "end": 881
  },
  {
    "type": "Identifier",
    "value": "rest",
    "start": 882,
    "end": 886
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 886,
    "end": 887
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 890,
    "end": 895
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 896,
    "end": 897
  },
  {
    "type": "Identifier",
    "value": "kc",
    "start": 902,
    "end": 904
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 904,
    "end": 905
  },
  {
    "type": "Identifier",
    "value": "kd",
    "start": 910,
    "end": 912
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 912,
    "end": 913
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 918,
    "end": 921
  },
  {
    "type": "Identifier",
    "value": "remaining2",
    "start": 943,
    "end": 953
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 956,
    "end": 957
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 958,
    "end": 959
  },
  {
    "type": "Identifier",
    "value": "rest",
    "start": 960,
    "end": 964
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 964,
    "end": 965
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 968,
    "end": 974
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 975,
    "end": 976
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 977,
    "end": 980
  },
  {
    "type": "Identifier",
    "value": "remaining",
    "start": 1003,
    "end": 1012
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1013,
    "end": 1014
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1014,
    "end": 1015
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1016,
    "end": 1017
  }
]
```
