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
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 7
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 10,
            "end": 12
          },
          "definite": false,
          "start": 6,
          "end": 12
        }
      ],
      "declare": false,
      "start": 0,
      "end": 13
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
            "name": "Object",
            "optional": false,
            "typeAnnotation": null,
            "start": 14,
            "end": 20
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "defineProperty",
            "optional": false,
            "typeAnnotation": null,
            "start": 21,
            "end": 35
          },
          "optional": false,
          "computed": false,
          "start": 14,
          "end": 35
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 36,
            "end": 37
          },
          {
            "type": "Literal",
            "value": "name",
            "raw": "\"name\"",
            "start": 39,
            "end": 45
          },
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 49,
                  "end": 54
                },
                "value": {
                  "type": "Literal",
                  "value": "Charles",
                  "raw": "\"Charles\"",
                  "start": 56,
                  "end": 65
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 49,
                "end": 65
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "writable",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 67,
                  "end": 75
                },
                "value": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 77,
                  "end": 81
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 67,
                "end": 81
              }
            ],
            "start": 47,
            "end": 83
          }
        ],
        "optional": false,
        "start": 14,
        "end": 84
      },
      "directive": null,
      "start": 14,
      "end": 85
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
            "name": "Object",
            "optional": false,
            "typeAnnotation": null,
            "start": 86,
            "end": 92
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "defineProperty",
            "optional": false,
            "typeAnnotation": null,
            "start": 93,
            "end": 107
          },
          "optional": false,
          "computed": false,
          "start": 86,
          "end": 107
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 108,
            "end": 109
          },
          {
            "type": "Literal",
            "value": "middleInit",
            "raw": "\"middleInit\"",
            "start": 111,
            "end": 123
          },
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 127,
                  "end": 132
                },
                "value": {
                  "type": "Literal",
                  "value": "H",
                  "raw": "\"H\"",
                  "start": 134,
                  "end": 137
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 127,
                "end": 137
              }
            ],
            "start": 125,
            "end": 139
          }
        ],
        "optional": false,
        "start": 86,
        "end": 140
      },
      "directive": null,
      "start": 86,
      "end": 141
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
            "name": "Object",
            "optional": false,
            "typeAnnotation": null,
            "start": 142,
            "end": 148
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "defineProperty",
            "optional": false,
            "typeAnnotation": null,
            "start": 149,
            "end": 163
          },
          "optional": false,
          "computed": false,
          "start": 142,
          "end": 163
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 164,
            "end": 165
          },
          {
            "type": "Literal",
            "value": "lastName",
            "raw": "\"lastName\"",
            "start": 167,
            "end": 177
          },
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 181,
                  "end": 186
                },
                "value": {
                  "type": "Literal",
                  "value": "Smith",
                  "raw": "\"Smith\"",
                  "start": 188,
                  "end": 195
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 181,
                "end": 195
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "writable",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 197,
                  "end": 205
                },
                "value": {
                  "type": "Literal",
                  "value": false,
                  "raw": "false",
                  "start": 207,
                  "end": 212
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 197,
                "end": 212
              }
            ],
            "start": 179,
            "end": 214
          }
        ],
        "optional": false,
        "start": 142,
        "end": 215
      },
      "directive": null,
      "start": 142,
      "end": 216
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
            "name": "Object",
            "optional": false,
            "typeAnnotation": null,
            "start": 217,
            "end": 223
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "defineProperty",
            "optional": false,
            "typeAnnotation": null,
            "start": 224,
            "end": 238
          },
          "optional": false,
          "computed": false,
          "start": 217,
          "end": 238
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 239,
            "end": 240
          },
          {
            "type": "Literal",
            "value": "zip",
            "raw": "\"zip\"",
            "start": 242,
            "end": 247
          },
          {
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
                  "start": 251,
                  "end": 254
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
                          "value": 98122,
                          "raw": "98122",
                          "start": 266,
                          "end": 271
                        },
                        "start": 259,
                        "end": 271
                      }
                    ],
                    "start": 257,
                    "end": 273
                  },
                  "expression": false,
                  "start": 254,
                  "end": 273
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 251,
                "end": 273
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "set",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 275,
                  "end": 278
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
                      "name": "_",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 279,
                      "end": 280
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 282,
                    "end": 296
                  },
                  "expression": false,
                  "start": 278,
                  "end": 296
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 275,
                "end": 296
              }
            ],
            "start": 249,
            "end": 298
          }
        ],
        "optional": false,
        "start": 217,
        "end": 299
      },
      "directive": null,
      "start": 217,
      "end": 300
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
            "name": "Object",
            "optional": false,
            "typeAnnotation": null,
            "start": 301,
            "end": 307
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "defineProperty",
            "optional": false,
            "typeAnnotation": null,
            "start": 308,
            "end": 322
          },
          "optional": false,
          "computed": false,
          "start": 301,
          "end": 322
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 323,
            "end": 324
          },
          {
            "type": "Literal",
            "value": "houseNumber",
            "raw": "\"houseNumber\"",
            "start": 326,
            "end": 339
          },
          {
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
                  "start": 343,
                  "end": 346
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
                          "value": 21.75,
                          "raw": "21.75",
                          "start": 358,
                          "end": 363
                        },
                        "start": 351,
                        "end": 363
                      }
                    ],
                    "start": 349,
                    "end": 365
                  },
                  "expression": false,
                  "start": 346,
                  "end": 365
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 343,
                "end": 365
              }
            ],
            "start": 341,
            "end": 367
          }
        ],
        "optional": false,
        "start": 301,
        "end": 368
      },
      "directive": null,
      "start": 301,
      "end": 369
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
            "name": "Object",
            "optional": false,
            "typeAnnotation": null,
            "start": 370,
            "end": 376
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "defineProperty",
            "optional": false,
            "typeAnnotation": null,
            "start": 377,
            "end": 391
          },
          "optional": false,
          "computed": false,
          "start": 370,
          "end": 391
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 392,
            "end": 393
          },
          {
            "type": "Literal",
            "value": "zipStr",
            "raw": "\"zipStr\"",
            "start": 395,
            "end": 403
          },
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "set",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 442,
                  "end": 445
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
                      "name": "str",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 446,
                      "end": 449
                    }
                  ],
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
                              "start": 461,
                              "end": 465
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "zip",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 466,
                              "end": 469
                            },
                            "optional": false,
                            "computed": false,
                            "start": 461,
                            "end": 469
                          },
                          "right": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Number",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 472,
                              "end": 478
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "str",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 479,
                                "end": 482
                              }
                            ],
                            "optional": false,
                            "start": 472,
                            "end": 483
                          },
                          "start": 461,
                          "end": 483
                        },
                        "directive": null,
                        "start": 461,
                        "end": 483
                      }
                    ],
                    "start": 451,
                    "end": 490
                  },
                  "expression": false,
                  "start": 445,
                  "end": 490
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 442,
                "end": 490
              }
            ],
            "start": 405,
            "end": 492
          }
        ],
        "optional": false,
        "start": 370,
        "end": 493
      },
      "directive": null,
      "start": 370,
      "end": 494
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "takeName",
        "optional": false,
        "typeAnnotation": null,
        "start": 546,
        "end": 554
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "named",
          "optional": false,
          "typeAnnotation": null,
          "start": 555,
          "end": 560
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
                "name": "named",
                "optional": false,
                "typeAnnotation": null,
                "start": 571,
                "end": 576
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "name",
                "optional": false,
                "typeAnnotation": null,
                "start": 577,
                "end": 581
              },
              "optional": false,
              "computed": false,
              "start": 571,
              "end": 581
            },
            "start": 564,
            "end": 582
          }
        ],
        "start": 562,
        "end": 584
      },
      "expression": false,
      "start": 537,
      "end": 584
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "takeName",
          "optional": false,
          "typeAnnotation": null,
          "start": 586,
          "end": 594
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 595,
            "end": 596
          }
        ],
        "optional": false,
        "start": 586,
        "end": 597
      },
      "directive": null,
      "start": 586,
      "end": 598
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
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 629,
            "end": 630
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 633,
              "end": 634
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "zip",
              "optional": false,
              "typeAnnotation": null,
              "start": 635,
              "end": 638
            },
            "optional": false,
            "computed": false,
            "start": 633,
            "end": 638
          },
          "definite": false,
          "start": 629,
          "end": 638
        }
      ],
      "declare": false,
      "start": 625,
      "end": 639
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
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 671,
            "end": 672
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 675,
              "end": 676
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "houseNumber",
              "optional": false,
              "typeAnnotation": null,
              "start": 677,
              "end": 688
            },
            "optional": false,
            "computed": false,
            "start": 675,
            "end": 688
          },
          "definite": false,
          "start": 671,
          "end": 688
        }
      ],
      "declare": false,
      "start": 667,
      "end": 689
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
            "name": "returnExemplar",
            "optional": false,
            "typeAnnotation": null,
            "start": 697,
            "end": 711
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 720,
              "end": 721
            },
            "id": null,
            "generator": false,
            "start": 714,
            "end": 721
          },
          "definite": false,
          "start": 697,
          "end": 721
        }
      ],
      "declare": false,
      "start": 691,
      "end": 722
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
            "name": "needsExemplar",
            "optional": false,
            "typeAnnotation": null,
            "start": 729,
            "end": 742
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "_",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 746,
                  "end": 747
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 750,
                  "end": 751
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 746,
                "end": 751
              }
            ],
            "returnType": null,
            "body": {
              "type": "UnaryExpression",
              "operator": "void",
              "argument": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 761,
                "end": 762
              },
              "prefix": true,
              "start": 756,
              "end": 762
            },
            "id": null,
            "generator": false,
            "start": 745,
            "end": 762
          },
          "definite": false,
          "start": 729,
          "end": 762
        }
      ],
      "declare": false,
      "start": 723,
      "end": 763
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
            "name": "expected",
            "optional": false,
            "typeAnnotation": null,
            "start": 771,
            "end": 779
          },
          "init": {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 944,
            "end": 948
          },
          "definite": false,
          "start": 771,
          "end": 950
        }
      ],
      "declare": false,
      "start": 765,
      "end": 951
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "match",
        "optional": false,
        "typeAnnotation": null,
        "start": 1047,
        "end": 1052
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 1053,
          "end": 1054
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 1056,
          "end": 1057
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1059,
        "end": 1061
      },
      "expression": false,
      "start": 1038,
      "end": 1061
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "match",
          "optional": false,
          "typeAnnotation": null,
          "start": 1063,
          "end": 1068
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "expected",
              "optional": false,
              "typeAnnotation": null,
              "start": 1075,
              "end": 1083
            },
            "id": null,
            "generator": false,
            "start": 1069,
            "end": 1083
          },
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1086,
                  "end": 1087
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "expected",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1090,
                  "end": 1098
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 1086,
                "end": 1098
              }
            ],
            "returnType": null,
            "body": {
              "type": "UnaryExpression",
              "operator": "void",
              "argument": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 1108,
                "end": 1109
              },
              "prefix": true,
              "start": 1103,
              "end": 1109
            },
            "id": null,
            "generator": false,
            "start": 1085,
            "end": 1109
          }
        ],
        "optional": false,
        "start": 1063,
        "end": 1110
      },
      "directive": null,
      "start": 1063,
      "end": 1111
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
            "name": "module",
            "optional": false,
            "typeAnnotation": null,
            "start": 1113,
            "end": 1119
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 1120,
            "end": 1127
          },
          "optional": false,
          "computed": false,
          "start": 1113,
          "end": 1127
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 1130,
          "end": 1131
        },
        "start": 1113,
        "end": 1131
      },
      "directive": null,
      "start": 1113,
      "end": 1132
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1133
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
    "value": "x",
    "start": 6,
    "end": 7
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 10,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 11,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 12,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 14,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 20,
    "end": 21
  },
  {
    "type": "Identifier",
    "value": "defineProperty",
    "start": 21,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 35,
    "end": 36
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 37,
    "end": 38
  },
  {
    "type": "String",
    "value": "\"name\"",
    "start": 39,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 45,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 47,
    "end": 48
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 49,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 54,
    "end": 55
  },
  {
    "type": "String",
    "value": "\"Charles\"",
    "start": 56,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 65,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "writable",
    "start": 67,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 75,
    "end": 76
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 77,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 82,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Identifier",
    "value": "Object",
    "start": 86,
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
    "value": "defineProperty",
    "start": 93,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 107,
    "end": 108
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 108,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 109,
    "end": 110
  },
  {
    "type": "String",
    "value": "\"middleInit\"",
    "start": 111,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 123,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 125,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 127,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 132,
    "end": 133
  },
  {
    "type": "String",
    "value": "\"H\"",
    "start": 134,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 138,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 139,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 140,
    "end": 141
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 142,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 148,
    "end": 149
  },
  {
    "type": "Identifier",
    "value": "defineProperty",
    "start": 149,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 163,
    "end": 164
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 164,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 165,
    "end": 166
  },
  {
    "type": "String",
    "value": "\"lastName\"",
    "start": 167,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 177,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 179,
    "end": 180
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 181,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 186,
    "end": 187
  },
  {
    "type": "String",
    "value": "\"Smith\"",
    "start": 188,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 195,
    "end": 196
  },
  {
    "type": "Identifier",
    "value": "writable",
    "start": 197,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 205,
    "end": 206
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 207,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 213,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "Object",
    "start": 217,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 223,
    "end": 224
  },
  {
    "type": "Identifier",
    "value": "defineProperty",
    "start": 224,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 238,
    "end": 239
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 239,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 240,
    "end": 241
  },
  {
    "type": "String",
    "value": "\"zip\"",
    "start": 242,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 247,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 249,
    "end": 250
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 251,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 254,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Keyword",
    "value": "return",
    "start": 259,
    "end": 265
  },
  {
    "type": "Numeric",
    "value": "98122",
    "start": 266,
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
    "value": ",",
    "start": 273,
    "end": 274
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 275,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 278,
    "end": 279
  },
  {
    "type": "Identifier",
    "value": "_",
    "start": 279,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 280,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 282,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 295,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 297,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 298,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 299,
    "end": 300
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 301,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 307,
    "end": 308
  },
  {
    "type": "Identifier",
    "value": "defineProperty",
    "start": 308,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 322,
    "end": 323
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 323,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 324,
    "end": 325
  },
  {
    "type": "String",
    "value": "\"houseNumber\"",
    "start": 326,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 339,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 341,
    "end": 342
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 343,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 346,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 347,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 349,
    "end": 350
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 351,
    "end": 357
  },
  {
    "type": "Numeric",
    "value": "21.75",
    "start": 358,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 364,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 366,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 367,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 368,
    "end": 369
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 370,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 376,
    "end": 377
  },
  {
    "type": "Identifier",
    "value": "defineProperty",
    "start": 377,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 391,
    "end": 392
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 392,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 393,
    "end": 394
  },
  {
    "type": "String",
    "value": "\"zipStr\"",
    "start": 395,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 403,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 405,
    "end": 406
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 442,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 445,
    "end": 446
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 446,
    "end": 449
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 449,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 451,
    "end": 452
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 461,
    "end": 465
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 465,
    "end": 466
  },
  {
    "type": "Identifier",
    "value": "zip",
    "start": 466,
    "end": 469
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 470,
    "end": 471
  },
  {
    "type": "Identifier",
    "value": "Number",
    "start": 472,
    "end": 478
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 478,
    "end": 479
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 479,
    "end": 482
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 482,
    "end": 483
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 489,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 491,
    "end": 492
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 492,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 493,
    "end": 494
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 537,
    "end": 545
  },
  {
    "type": "Identifier",
    "value": "takeName",
    "start": 546,
    "end": 554
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 554,
    "end": 555
  },
  {
    "type": "Identifier",
    "value": "named",
    "start": 555,
    "end": 560
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 560,
    "end": 561
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 562,
    "end": 563
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 564,
    "end": 570
  },
  {
    "type": "Identifier",
    "value": "named",
    "start": 571,
    "end": 576
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 576,
    "end": 577
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 577,
    "end": 581
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 581,
    "end": 582
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 583,
    "end": 584
  },
  {
    "type": "Identifier",
    "value": "takeName",
    "start": 586,
    "end": 594
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 594,
    "end": 595
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 595,
    "end": 596
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 596,
    "end": 597
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 597,
    "end": 598
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 625,
    "end": 628
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 629,
    "end": 630
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 631,
    "end": 632
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 633,
    "end": 634
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 634,
    "end": 635
  },
  {
    "type": "Identifier",
    "value": "zip",
    "start": 635,
    "end": 638
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 638,
    "end": 639
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 667,
    "end": 670
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 671,
    "end": 672
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 673,
    "end": 674
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 675,
    "end": 676
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 676,
    "end": 677
  },
  {
    "type": "Identifier",
    "value": "houseNumber",
    "start": 677,
    "end": 688
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 688,
    "end": 689
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 691,
    "end": 696
  },
  {
    "type": "Identifier",
    "value": "returnExemplar",
    "start": 697,
    "end": 711
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 712,
    "end": 713
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 714,
    "end": 715
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 715,
    "end": 716
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 717,
    "end": 719
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 720,
    "end": 721
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 721,
    "end": 722
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 723,
    "end": 728
  },
  {
    "type": "Identifier",
    "value": "needsExemplar",
    "start": 729,
    "end": 742
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 743,
    "end": 744
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 745,
    "end": 746
  },
  {
    "type": "Identifier",
    "value": "_",
    "start": 746,
    "end": 747
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 748,
    "end": 749
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 750,
    "end": 751
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 751,
    "end": 752
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 753,
    "end": 755
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 756,
    "end": 760
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 761,
    "end": 762
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 762,
    "end": 763
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 765,
    "end": 770
  },
  {
    "type": "Identifier",
    "value": "expected",
    "start": 771,
    "end": 779
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 780,
    "end": 781
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 926,
    "end": 927
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 943,
    "end": 944
  },
  {
    "type": "Null",
    "value": "null",
    "start": 944,
    "end": 948
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 948,
    "end": 949
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 949,
    "end": 950
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 950,
    "end": 951
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1038,
    "end": 1046
  },
  {
    "type": "Identifier",
    "value": "match",
    "start": 1047,
    "end": 1052
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1052,
    "end": 1053
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1053,
    "end": 1054
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1054,
    "end": 1055
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1056,
    "end": 1057
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1057,
    "end": 1058
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1059,
    "end": 1060
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1060,
    "end": 1061
  },
  {
    "type": "Identifier",
    "value": "match",
    "start": 1063,
    "end": 1068
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1068,
    "end": 1069
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1069,
    "end": 1070
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1070,
    "end": 1071
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1072,
    "end": 1074
  },
  {
    "type": "Identifier",
    "value": "expected",
    "start": 1075,
    "end": 1083
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1083,
    "end": 1084
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1085,
    "end": 1086
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1086,
    "end": 1087
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1088,
    "end": 1089
  },
  {
    "type": "Identifier",
    "value": "expected",
    "start": 1090,
    "end": 1098
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1098,
    "end": 1099
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1100,
    "end": 1102
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1103,
    "end": 1107
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1108,
    "end": 1109
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1109,
    "end": 1110
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1110,
    "end": 1111
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 1113,
    "end": 1119
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1119,
    "end": 1120
  },
  {
    "type": "Identifier",
    "value": "exports",
    "start": 1120,
    "end": 1127
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1128,
    "end": 1129
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1130,
    "end": 1131
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1131,
    "end": 1132
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "x",
        "optional": false,
        "typeAnnotation": null,
        "start": 104,
        "end": 105
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "./",
          "raw": "\"./\"",
          "start": 116,
          "end": 120
        },
        "start": 108,
        "end": 121
      },
      "importKind": "value",
      "start": 97,
      "end": 122
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 123,
          "end": 124
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "name",
          "optional": false,
          "typeAnnotation": null,
          "start": 125,
          "end": 129
        },
        "optional": false,
        "computed": false,
        "start": 123,
        "end": 129
      },
      "directive": null,
      "start": 123,
      "end": 130
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 131,
          "end": 132
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "middleInit",
          "optional": false,
          "typeAnnotation": null,
          "start": 133,
          "end": 143
        },
        "optional": false,
        "computed": false,
        "start": 131,
        "end": 143
      },
      "directive": null,
      "start": 131,
      "end": 144
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 145,
          "end": 146
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "lastName",
          "optional": false,
          "typeAnnotation": null,
          "start": 147,
          "end": 155
        },
        "optional": false,
        "computed": false,
        "start": 145,
        "end": 155
      },
      "directive": null,
      "start": 145,
      "end": 156
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 157,
          "end": 158
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "zip",
          "optional": false,
          "typeAnnotation": null,
          "start": 159,
          "end": 162
        },
        "optional": false,
        "computed": false,
        "start": 157,
        "end": 162
      },
      "directive": null,
      "start": 157,
      "end": 163
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 164,
          "end": 165
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "houseNumber",
          "optional": false,
          "typeAnnotation": null,
          "start": 166,
          "end": 177
        },
        "optional": false,
        "computed": false,
        "start": 164,
        "end": 177
      },
      "directive": null,
      "start": 164,
      "end": 178
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 179,
          "end": 180
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "zipStr",
          "optional": false,
          "typeAnnotation": null,
          "start": 181,
          "end": 187
        },
        "optional": false,
        "computed": false,
        "start": 179,
        "end": 187
      },
      "directive": null,
      "start": 179,
      "end": 188
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
            "start": 190,
            "end": 191
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "name",
            "optional": false,
            "typeAnnotation": null,
            "start": 192,
            "end": 196
          },
          "optional": false,
          "computed": false,
          "start": 190,
          "end": 196
        },
        "right": {
          "type": "Literal",
          "value": "Another",
          "raw": "\"Another\"",
          "start": 199,
          "end": 208
        },
        "start": 190,
        "end": 208
      },
      "directive": null,
      "start": 190,
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
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 210,
            "end": 211
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "zip",
            "optional": false,
            "typeAnnotation": null,
            "start": 212,
            "end": 215
          },
          "optional": false,
          "computed": false,
          "start": 210,
          "end": 215
        },
        "right": {
          "type": "Literal",
          "value": 98123,
          "raw": "98123",
          "start": 218,
          "end": 223
        },
        "start": 210,
        "end": 223
      },
      "directive": null,
      "start": 210,
      "end": 224
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
            "start": 225,
            "end": 226
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "zipStr",
            "optional": false,
            "typeAnnotation": null,
            "start": 227,
            "end": 233
          },
          "optional": false,
          "computed": false,
          "start": 225,
          "end": 233
        },
        "right": {
          "type": "Literal",
          "value": "OK",
          "raw": "\"OK\"",
          "start": 236,
          "end": 240
        },
        "start": 225,
        "end": 240
      },
      "directive": null,
      "start": 225,
      "end": 241
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
            "start": 243,
            "end": 244
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "lastName",
            "optional": false,
            "typeAnnotation": null,
            "start": 245,
            "end": 253
          },
          "optional": false,
          "computed": false,
          "start": 243,
          "end": 253
        },
        "right": {
          "type": "Literal",
          "value": "should fail",
          "raw": "\"should fail\"",
          "start": 256,
          "end": 269
        },
        "start": 243,
        "end": 269
      },
      "directive": null,
      "start": 243,
      "end": 270
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
            "start": 271,
            "end": 272
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "houseNumber",
            "optional": false,
            "typeAnnotation": null,
            "start": 273,
            "end": 284
          },
          "optional": false,
          "computed": false,
          "start": 271,
          "end": 284
        },
        "right": {
          "type": "Literal",
          "value": 12,
          "raw": "12",
          "start": 287,
          "end": 289
        },
        "start": 271,
        "end": 289
      },
      "directive": null,
      "start": 271,
      "end": 290
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
            "start": 311,
            "end": 312
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "zipStr",
            "optional": false,
            "typeAnnotation": null,
            "start": 313,
            "end": 319
          },
          "optional": false,
          "computed": false,
          "start": 311,
          "end": 319
        },
        "right": {
          "type": "Literal",
          "value": 12,
          "raw": "12",
          "start": 322,
          "end": 324
        },
        "start": 311,
        "end": 324
      },
      "directive": null,
      "start": 311,
      "end": 325
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
            "start": 341,
            "end": 342
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "middleInit",
            "optional": false,
            "typeAnnotation": null,
            "start": 343,
            "end": 353
          },
          "optional": false,
          "computed": false,
          "start": 341,
          "end": 353
        },
        "right": {
          "type": "Literal",
          "value": "R",
          "raw": "\"R\"",
          "start": 356,
          "end": 359
        },
        "start": 341,
        "end": 359
      },
      "directive": null,
      "start": 341,
      "end": 360
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 97,
  "end": 380
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 97,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 104,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 106,
    "end": 107
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 108,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 115,
    "end": 116
  },
  {
    "type": "String",
    "value": "\"./\"",
    "start": 116,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 120,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 121,
    "end": 122
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 123,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 124,
    "end": 125
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 125,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 129,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 131,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 132,
    "end": 133
  },
  {
    "type": "Identifier",
    "value": "middleInit",
    "start": 133,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 143,
    "end": 144
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 145,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 146,
    "end": 147
  },
  {
    "type": "Identifier",
    "value": "lastName",
    "start": 147,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 155,
    "end": 156
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 157,
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
    "value": "zip",
    "start": 159,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 162,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 164,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 165,
    "end": 166
  },
  {
    "type": "Identifier",
    "value": "houseNumber",
    "start": 166,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 177,
    "end": 178
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": "zipStr",
    "start": 181,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 187,
    "end": 188
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 190,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 191,
    "end": 192
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 192,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 197,
    "end": 198
  },
  {
    "type": "String",
    "value": "\"Another\"",
    "start": 199,
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
    "value": "x",
    "start": 210,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 211,
    "end": 212
  },
  {
    "type": "Identifier",
    "value": "zip",
    "start": 212,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 216,
    "end": 217
  },
  {
    "type": "Numeric",
    "value": "98123",
    "start": 218,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 223,
    "end": 224
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 225,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 226,
    "end": 227
  },
  {
    "type": "Identifier",
    "value": "zipStr",
    "start": 227,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 234,
    "end": 235
  },
  {
    "type": "String",
    "value": "\"OK\"",
    "start": 236,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 240,
    "end": 241
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 243,
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
    "value": "lastName",
    "start": 245,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 254,
    "end": 255
  },
  {
    "type": "String",
    "value": "\"should fail\"",
    "start": 256,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 269,
    "end": 270
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 271,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 272,
    "end": 273
  },
  {
    "type": "Identifier",
    "value": "houseNumber",
    "start": 273,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 285,
    "end": 286
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 287,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 289,
    "end": 290
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 311,
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
    "value": "zipStr",
    "start": 313,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 320,
    "end": 321
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 322,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 324,
    "end": 325
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 341,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 342,
    "end": 343
  },
  {
    "type": "Identifier",
    "value": "middleInit",
    "start": 343,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 354,
    "end": 355
  },
  {
    "type": "String",
    "value": "\"R\"",
    "start": 356,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 359,
    "end": 360
  }
]
```
