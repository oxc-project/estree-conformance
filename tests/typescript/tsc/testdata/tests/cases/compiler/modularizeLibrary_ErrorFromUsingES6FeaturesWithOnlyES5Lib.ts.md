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
        "start": 102,
        "end": 103
      },
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
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 107,
              "end": 113
            },
            "start": 105,
            "end": 113
          },
          "start": 104,
          "end": 113
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 118,
              "end": 124
            },
            "start": 116,
            "end": 124
          },
          "start": 115,
          "end": 124
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "z",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 129,
              "end": 135
            },
            "start": 127,
            "end": 135
          },
          "start": 126,
          "end": 135
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Array",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 150,
                  "end": 155
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "from",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 156,
                  "end": 160
                },
                "optional": false,
                "computed": false,
                "start": 150,
                "end": 160
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arguments",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 161,
                  "end": 170
                }
              ],
              "optional": false,
              "start": 150,
              "end": 171
            },
            "start": 143,
            "end": 172
          }
        ],
        "start": 137,
        "end": 174
      },
      "expression": false,
      "start": 93,
      "end": 174
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null,
          "start": 176,
          "end": 177
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 178,
            "end": 179
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 181,
            "end": 182
          },
          {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 184,
            "end": 185
          }
        ],
        "optional": false,
        "start": 176,
        "end": 186
      },
      "directive": null,
      "start": 176,
      "end": 187
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
            "name": "m",
            "optional": false,
            "typeAnnotation": null,
            "start": 230,
            "end": 231
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Map",
              "optional": false,
              "typeAnnotation": null,
              "start": 238,
              "end": 241
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSStringKeyword",
                  "start": 242,
                  "end": 248
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 250,
                  "end": 256
                }
              ],
              "start": 241,
              "end": 257
            },
            "arguments": [],
            "start": 234,
            "end": 259
          },
          "definite": false,
          "start": 230,
          "end": 259
        }
      ],
      "declare": false,
      "start": 226,
      "end": 260
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
            "name": "m",
            "optional": false,
            "typeAnnotation": null,
            "start": 261,
            "end": 262
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "clear",
            "optional": false,
            "typeAnnotation": null,
            "start": 263,
            "end": 268
          },
          "optional": false,
          "computed": false,
          "start": 261,
          "end": 268
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 261,
        "end": 270
      },
      "directive": null,
      "start": 261,
      "end": 271
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
            "name": "m",
            "optional": false,
            "typeAnnotation": null,
            "start": 294,
            "end": 295
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "keys",
            "optional": false,
            "typeAnnotation": null,
            "start": 296,
            "end": 300
          },
          "optional": false,
          "computed": false,
          "start": 294,
          "end": 300
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 294,
        "end": 302
      },
      "directive": null,
      "start": 294,
      "end": 303
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Baz",
        "optional": false,
        "typeAnnotation": null,
        "start": 336,
        "end": 339
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
        "start": 342,
        "end": 345
      },
      "expression": false,
      "start": 327,
      "end": 345
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "Baz",
          "optional": false,
          "typeAnnotation": null,
          "start": 346,
          "end": 349
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "name",
          "optional": false,
          "typeAnnotation": null,
          "start": 350,
          "end": 354
        },
        "optional": false,
        "computed": false,
        "start": 346,
        "end": 354
      },
      "directive": null,
      "start": 346,
      "end": 355
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
            "name": "Math",
            "optional": false,
            "typeAnnotation": null,
            "start": 375,
            "end": 379
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "sign",
            "optional": false,
            "typeAnnotation": null,
            "start": 380,
            "end": 384
          },
          "optional": false,
          "computed": false,
          "start": 375,
          "end": 384
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 385,
            "end": 386
          }
        ],
        "optional": false,
        "start": 375,
        "end": 387
      },
      "directive": null,
      "start": 375,
      "end": 388
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
            "name": "o",
            "optional": false,
            "typeAnnotation": null,
            "start": 414,
            "end": 415
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
                  "start": 424,
                  "end": 425
                },
                "value": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 427,
                  "end": 428
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 424,
                "end": 428
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 435,
                    "end": 441
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "hasInstance",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 442,
                    "end": 453
                  },
                  "optional": false,
                  "computed": false,
                  "start": 435,
                  "end": 453
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
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 462,
                          "end": 465
                        },
                        "start": 460,
                        "end": 465
                      },
                      "start": 455,
                      "end": 465
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Literal",
                          "value": false,
                          "raw": "false",
                          "start": 484,
                          "end": 489
                        },
                        "start": 477,
                        "end": 490
                      }
                    ],
                    "start": 467,
                    "end": 496
                  },
                  "expression": false,
                  "start": 454,
                  "end": 496
                },
                "method": true,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 434,
                "end": 496
              }
            ],
            "start": 418,
            "end": 498
          },
          "definite": false,
          "start": 414,
          "end": 498
        }
      ],
      "declare": false,
      "start": 410,
      "end": 499
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
            "name": "o",
            "optional": false,
            "typeAnnotation": null,
            "start": 500,
            "end": 501
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "hasOwnProperty",
            "optional": false,
            "typeAnnotation": null,
            "start": 502,
            "end": 516
          },
          "optional": false,
          "computed": false,
          "start": 500,
          "end": 516
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null,
              "start": 517,
              "end": 523
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "hasInstance",
              "optional": false,
              "typeAnnotation": null,
              "start": 524,
              "end": 535
            },
            "optional": false,
            "computed": false,
            "start": 517,
            "end": 535
          }
        ],
        "optional": false,
        "start": 500,
        "end": 536
      },
      "directive": null,
      "start": 500,
      "end": 537
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
            "name": "t",
            "optional": false,
            "typeAnnotation": null,
            "start": 562,
            "end": 563
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 566,
            "end": 568
          },
          "definite": false,
          "start": 562,
          "end": 568
        }
      ],
      "declare": false,
      "start": 558,
      "end": 568
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
            "name": "p",
            "optional": false,
            "typeAnnotation": null,
            "start": 573,
            "end": 574
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Proxy",
              "optional": false,
              "typeAnnotation": null,
              "start": 581,
              "end": 586
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null,
                "start": 587,
                "end": 588
              },
              {
                "type": "ObjectExpression",
                "properties": [],
                "start": 590,
                "end": 592
              }
            ],
            "start": 577,
            "end": 593
          },
          "definite": false,
          "start": 573,
          "end": 593
        }
      ],
      "declare": false,
      "start": 569,
      "end": 594
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
            "name": "Reflect",
            "optional": false,
            "typeAnnotation": null,
            "start": 617,
            "end": 624
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "isExtensible",
            "optional": false,
            "typeAnnotation": null,
            "start": 625,
            "end": 637
          },
          "optional": false,
          "computed": false,
          "start": 617,
          "end": 637
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [],
            "start": 638,
            "end": 640
          }
        ],
        "optional": false,
        "start": 617,
        "end": 641
      },
      "directive": null,
      "start": 617,
      "end": 642
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
            "name": "reg",
            "optional": false,
            "typeAnnotation": null,
            "start": 668,
            "end": 671
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "RegExp",
              "optional": false,
              "typeAnnotation": null,
              "start": 678,
              "end": 684
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "/s",
                "raw": "\"/s\"",
                "start": 685,
                "end": 689
              }
            ],
            "start": 674,
            "end": 690
          },
          "definite": false,
          "start": 668,
          "end": 690
        }
      ],
      "declare": false,
      "start": 664,
      "end": 691
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "reg",
          "optional": false,
          "typeAnnotation": null,
          "start": 692,
          "end": 695
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "flags",
          "optional": false,
          "typeAnnotation": null,
          "start": 696,
          "end": 701
        },
        "optional": false,
        "computed": false,
        "start": 692,
        "end": 701
      },
      "directive": null,
      "start": 692,
      "end": 702
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
            "name": "str",
            "optional": false,
            "typeAnnotation": null,
            "start": 728,
            "end": 731
          },
          "init": {
            "type": "Literal",
            "value": "Hello world",
            "raw": "\"Hello world\"",
            "start": 734,
            "end": 747
          },
          "definite": false,
          "start": 728,
          "end": 747
        }
      ],
      "declare": false,
      "start": 724,
      "end": 748
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
            "name": "str",
            "optional": false,
            "typeAnnotation": null,
            "start": 749,
            "end": 752
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "includes",
            "optional": false,
            "typeAnnotation": null,
            "start": 753,
            "end": 761
          },
          "optional": false,
          "computed": false,
          "start": 749,
          "end": 761
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "hello",
            "raw": "\"hello\"",
            "start": 762,
            "end": 769
          },
          {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 771,
            "end": 772
          }
        ],
        "optional": false,
        "start": 749,
        "end": 773
      },
      "directive": null,
      "start": 749,
      "end": 774
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
            "name": "s",
            "optional": false,
            "typeAnnotation": null,
            "start": 800,
            "end": 801
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null,
              "start": 804,
              "end": 810
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 804,
            "end": 812
          },
          "definite": false,
          "start": 800,
          "end": 812
        }
      ],
      "declare": false,
      "start": 796,
      "end": 813
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
            "name": "o1",
            "optional": false,
            "typeAnnotation": null,
            "start": 851,
            "end": 853
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 863,
                    "end": 869
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "hasInstance",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 870,
                    "end": 881
                  },
                  "optional": false,
                  "computed": false,
                  "start": 863,
                  "end": 881
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
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 890,
                          "end": 893
                        },
                        "start": 888,
                        "end": 893
                      },
                      "start": 883,
                      "end": 893
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Literal",
                          "value": false,
                          "raw": "false",
                          "start": 912,
                          "end": 917
                        },
                        "start": 905,
                        "end": 918
                      }
                    ],
                    "start": 895,
                    "end": 924
                  },
                  "expression": false,
                  "start": 882,
                  "end": 924
                },
                "method": true,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 862,
                "end": 924
              }
            ],
            "start": 856,
            "end": 926
          },
          "definite": false,
          "start": 851,
          "end": 926
        }
      ],
      "declare": false,
      "start": 845,
      "end": 926
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 93,
  "end": 926
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 93,
    "end": 101
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 102,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 103,
    "end": 104
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 104,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 105,
    "end": 106
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 107,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 113,
    "end": 114
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 115,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 116,
    "end": 117
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 118,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 124,
    "end": 125
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 126,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 127,
    "end": 128
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 129,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 135,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 137,
    "end": 138
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 143,
    "end": 149
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 150,
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
    "value": "from",
    "start": 156,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 160,
    "end": 161
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 161,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 170,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 171,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 173,
    "end": 174
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 176,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 177,
    "end": 178
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 178,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 179,
    "end": 180
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 181,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 182,
    "end": 183
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 184,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 185,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 186,
    "end": 187
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 226,
    "end": 229
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 230,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 232,
    "end": 233
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 234,
    "end": 237
  },
  {
    "type": "Identifier",
    "value": "Map",
    "start": 238,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 241,
    "end": 242
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 242,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 248,
    "end": 249
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 250,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 256,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 257,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 258,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 259,
    "end": 260
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 261,
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
    "value": "clear",
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
    "value": "m",
    "start": 294,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 295,
    "end": 296
  },
  {
    "type": "Identifier",
    "value": "keys",
    "start": 296,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 300,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 301,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 302,
    "end": 303
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 327,
    "end": 335
  },
  {
    "type": "Identifier",
    "value": "Baz",
    "start": 336,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 339,
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
    "type": "Punctuator",
    "value": "}",
    "start": 344,
    "end": 345
  },
  {
    "type": "Identifier",
    "value": "Baz",
    "start": 346,
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
    "value": "name",
    "start": 350,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 354,
    "end": 355
  },
  {
    "type": "Identifier",
    "value": "Math",
    "start": 375,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 379,
    "end": 380
  },
  {
    "type": "Identifier",
    "value": "sign",
    "start": 380,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 384,
    "end": 385
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 385,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 386,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 387,
    "end": 388
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 410,
    "end": 413
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 414,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 416,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 418,
    "end": 419
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 424,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 425,
    "end": 426
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 427,
    "end": 428
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 428,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 434,
    "end": 435
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 435,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 441,
    "end": 442
  },
  {
    "type": "Identifier",
    "value": "hasInstance",
    "start": 442,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 453,
    "end": 454
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 454,
    "end": 455
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 455,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 460,
    "end": 461
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 462,
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
    "value": "{",
    "start": 467,
    "end": 468
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 477,
    "end": 483
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 484,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 489,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 495,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 497,
    "end": 498
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 498,
    "end": 499
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 500,
    "end": 501
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 501,
    "end": 502
  },
  {
    "type": "Identifier",
    "value": "hasOwnProperty",
    "start": 502,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 516,
    "end": 517
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 517,
    "end": 523
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 523,
    "end": 524
  },
  {
    "type": "Identifier",
    "value": "hasInstance",
    "start": 524,
    "end": 535
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 535,
    "end": 536
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 536,
    "end": 537
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 558,
    "end": 561
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 562,
    "end": 563
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 564,
    "end": 565
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 566,
    "end": 567
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 567,
    "end": 568
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 569,
    "end": 572
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 573,
    "end": 574
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 575,
    "end": 576
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 577,
    "end": 580
  },
  {
    "type": "Identifier",
    "value": "Proxy",
    "start": 581,
    "end": 586
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 586,
    "end": 587
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 587,
    "end": 588
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 588,
    "end": 589
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 590,
    "end": 591
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 591,
    "end": 592
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Identifier",
    "value": "Reflect",
    "start": 617,
    "end": 624
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 624,
    "end": 625
  },
  {
    "type": "Identifier",
    "value": "isExtensible",
    "start": 625,
    "end": 637
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 637,
    "end": 638
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 638,
    "end": 639
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 639,
    "end": 640
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 640,
    "end": 641
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 641,
    "end": 642
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 664,
    "end": 667
  },
  {
    "type": "Identifier",
    "value": "reg",
    "start": 668,
    "end": 671
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 672,
    "end": 673
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 674,
    "end": 677
  },
  {
    "type": "Identifier",
    "value": "RegExp",
    "start": 678,
    "end": 684
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 684,
    "end": 685
  },
  {
    "type": "String",
    "value": "\"/s\"",
    "start": 685,
    "end": 689
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 689,
    "end": 690
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 690,
    "end": 691
  },
  {
    "type": "Identifier",
    "value": "reg",
    "start": 692,
    "end": 695
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 695,
    "end": 696
  },
  {
    "type": "Identifier",
    "value": "flags",
    "start": 696,
    "end": 701
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 701,
    "end": 702
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 724,
    "end": 727
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 728,
    "end": 731
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 732,
    "end": 733
  },
  {
    "type": "String",
    "value": "\"Hello world\"",
    "start": 734,
    "end": 747
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 747,
    "end": 748
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 749,
    "end": 752
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 752,
    "end": 753
  },
  {
    "type": "Identifier",
    "value": "includes",
    "start": 753,
    "end": 761
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 761,
    "end": 762
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 762,
    "end": 769
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 769,
    "end": 770
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 771,
    "end": 772
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 772,
    "end": 773
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 773,
    "end": 774
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 796,
    "end": 799
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 800,
    "end": 801
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 802,
    "end": 803
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 804,
    "end": 810
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 810,
    "end": 811
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 811,
    "end": 812
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 812,
    "end": 813
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 845,
    "end": 850
  },
  {
    "type": "Identifier",
    "value": "o1",
    "start": 851,
    "end": 853
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 854,
    "end": 855
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 856,
    "end": 857
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 862,
    "end": 863
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 863,
    "end": 869
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 869,
    "end": 870
  },
  {
    "type": "Identifier",
    "value": "hasInstance",
    "start": 870,
    "end": 881
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 881,
    "end": 882
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 882,
    "end": 883
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 883,
    "end": 888
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 888,
    "end": 889
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 890,
    "end": 893
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 893,
    "end": 894
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 895,
    "end": 896
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 905,
    "end": 911
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 912,
    "end": 917
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 917,
    "end": 918
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 923,
    "end": 924
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 925,
    "end": 926
  }
]
```
