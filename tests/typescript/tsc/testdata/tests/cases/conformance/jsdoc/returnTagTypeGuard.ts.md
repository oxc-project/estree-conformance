__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Entry",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 11
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
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 18,
              "end": 29
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
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 42,
                          "end": 46
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 47,
                          "end": 48
                        },
                        "optional": false,
                        "computed": false,
                        "start": 42,
                        "end": 48
                      },
                      "right": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 51,
                        "end": 52
                      },
                      "start": 42,
                      "end": 52
                    },
                    "directive": null,
                    "start": 42,
                    "end": 52
                  }
                ],
                "start": 32,
                "end": 58
              },
              "expression": false,
              "start": 29,
              "end": 58
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 18,
            "end": 58
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "isInit",
              "optional": false,
              "typeAnnotation": null,
              "start": 132,
              "end": 138
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
                  "start": 139,
                  "end": 140
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
                      "value": true,
                      "raw": "true",
                      "start": 159,
                      "end": 163
                    },
                    "start": 152,
                    "end": 163
                  }
                ],
                "start": 142,
                "end": 169
              },
              "expression": false,
              "start": 138,
              "end": 169
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 132,
            "end": 169
          }
        ],
        "start": 12,
        "end": 171
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 171
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Group",
        "optional": false,
        "typeAnnotation": null,
        "start": 178,
        "end": 183
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
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 190,
              "end": 201
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
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 214,
                          "end": 218
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "d",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 219,
                          "end": 220
                        },
                        "optional": false,
                        "computed": false,
                        "start": 214,
                        "end": 220
                      },
                      "right": {
                        "type": "Literal",
                        "value": "no",
                        "raw": "'no'",
                        "start": 223,
                        "end": 227
                      },
                      "start": 214,
                      "end": 227
                    },
                    "directive": null,
                    "start": 214,
                    "end": 227
                  }
                ],
                "start": 204,
                "end": 233
              },
              "expression": false,
              "start": 201,
              "end": 233
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 190,
            "end": 233
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "isInit",
              "optional": false,
              "typeAnnotation": null,
              "start": 299,
              "end": 305
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
                  "start": 306,
                  "end": 307
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
                      "start": 326,
                      "end": 331
                    },
                    "start": 319,
                    "end": 331
                  }
                ],
                "start": 309,
                "end": 337
              },
              "expression": false,
              "start": 305,
              "end": 337
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 299,
            "end": 337
          }
        ],
        "start": 184,
        "end": 339
      },
      "abstract": false,
      "declare": false,
      "start": 172,
      "end": 339
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 385,
        "end": 386
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "chunk",
          "optional": false,
          "typeAnnotation": null,
          "start": 387,
          "end": 392
        }
      ],
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
                  "start": 404,
                  "end": 405
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "chunk",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 408,
                        "end": 413
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "isInit",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 414,
                        "end": 420
                      },
                      "optional": false,
                      "computed": false,
                      "start": 408,
                      "end": 420
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "chunk",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 421,
                        "end": 426
                      }
                    ],
                    "optional": false,
                    "start": 408,
                    "end": 427
                  },
                  "consequent": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "chunk",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 430,
                      "end": 435
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 436,
                      "end": 437
                    },
                    "optional": false,
                    "computed": false,
                    "start": 430,
                    "end": 437
                  },
                  "alternate": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "chunk",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 440,
                      "end": 445
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "d",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 446,
                      "end": 447
                    },
                    "optional": false,
                    "computed": false,
                    "start": 440,
                    "end": 447
                  },
                  "start": 408,
                  "end": 447
                },
                "definite": false,
                "start": 404,
                "end": 447
              }
            ],
            "declare": false,
            "start": 400,
            "end": 447
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 459,
              "end": 460
            },
            "start": 452,
            "end": 460
          }
        ],
        "start": 394,
        "end": 462
      },
      "expression": false,
      "start": 376,
      "end": 462
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isBoolean",
        "optional": false,
        "typeAnnotation": null,
        "start": 533,
        "end": 542
      },
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
          "typeAnnotation": null,
          "start": 543,
          "end": 548
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
                "type": "UnaryExpression",
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 570,
                  "end": 575
                },
                "prefix": true,
                "start": 563,
                "end": 575
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "boolean",
                "raw": "\"boolean\"",
                "start": 580,
                "end": 589
              },
              "start": 563,
              "end": 589
            },
            "start": 556,
            "end": 590
          }
        ],
        "start": 550,
        "end": 592
      },
      "expression": false,
      "start": 524,
      "end": 592
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 640,
        "end": 643
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "val",
          "optional": false,
          "typeAnnotation": null,
          "start": 644,
          "end": 647
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "isBoolean",
                "optional": false,
                "typeAnnotation": null,
                "start": 659,
                "end": 668
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "val",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 669,
                  "end": 672
                }
              ],
              "optional": false,
              "start": 659,
              "end": 673
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "val",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 685,
                    "end": 688
                  },
                  "directive": null,
                  "start": 685,
                  "end": 689
                }
              ],
              "start": 675,
              "end": 695
            },
            "alternate": null,
            "start": 655,
            "end": 695
          }
        ],
        "start": 649,
        "end": 697
      },
      "expression": false,
      "start": 631,
      "end": 697
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isNumber",
        "optional": false,
        "typeAnnotation": null,
        "start": 798,
        "end": 806
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
          "typeAnnotation": null,
          "start": 807,
          "end": 808
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
                "type": "UnaryExpression",
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 826,
                  "end": 827
                },
                "prefix": true,
                "start": 819,
                "end": 827
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "number",
                "raw": "\"number\"",
                "start": 832,
                "end": 840
              },
              "start": 819,
              "end": 840
            },
            "start": 812,
            "end": 840
          }
        ],
        "start": 810,
        "end": 842
      },
      "expression": false,
      "start": 789,
      "end": 842
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null,
        "start": 879,
        "end": 880
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
          "typeAnnotation": null,
          "start": 881,
          "end": 882
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "isNumber",
                "optional": false,
                "typeAnnotation": null,
                "start": 894,
                "end": 902
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 903,
                  "end": 904
                }
              ],
              "optional": false,
              "start": 894,
              "end": 905
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 917,
                      "end": 918
                    },
                    "operator": "*",
                    "right": {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 921,
                      "end": 922
                    },
                    "start": 917,
                    "end": 922
                  },
                  "directive": null,
                  "start": 917,
                  "end": 923
                }
              ],
              "start": 907,
              "end": 929
            },
            "alternate": null,
            "start": 890,
            "end": 929
          }
        ],
        "start": 884,
        "end": 931
      },
      "expression": false,
      "start": 870,
      "end": 931
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 931
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 0,
    "end": 5
  },
  {
    "type": "Identifier",
    "value": "Entry",
    "start": 6,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 12,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 18,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 29,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 30,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 32,
    "end": 33
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 42,
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
    "value": "c",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 49,
    "end": 50
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 51,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 57,
    "end": 58
  },
  {
    "type": "Identifier",
    "value": "isInit",
    "start": 132,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 138,
    "end": 139
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 139,
    "end": 140
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
    "type": "Keyword",
    "value": "return",
    "start": 152,
    "end": 158
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 159,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 168,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 170,
    "end": 171
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 172,
    "end": 177
  },
  {
    "type": "Identifier",
    "value": "Group",
    "start": 178,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 184,
    "end": 185
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 190,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 201,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 202,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 204,
    "end": 205
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 214,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 218,
    "end": 219
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 219,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 221,
    "end": 222
  },
  {
    "type": "String",
    "value": "'no'",
    "start": 223,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 232,
    "end": 233
  },
  {
    "type": "Identifier",
    "value": "isInit",
    "start": 299,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 305,
    "end": 306
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 306,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 307,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 309,
    "end": 310
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 319,
    "end": 325
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 326,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 336,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 338,
    "end": 339
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 376,
    "end": 384
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 385,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 386,
    "end": 387
  },
  {
    "type": "Identifier",
    "value": "chunk",
    "start": 387,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 392,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 394,
    "end": 395
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 400,
    "end": 403
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 404,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 406,
    "end": 407
  },
  {
    "type": "Identifier",
    "value": "chunk",
    "start": 408,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 413,
    "end": 414
  },
  {
    "type": "Identifier",
    "value": "isInit",
    "start": 414,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 420,
    "end": 421
  },
  {
    "type": "Identifier",
    "value": "chunk",
    "start": 421,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 426,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 428,
    "end": 429
  },
  {
    "type": "Identifier",
    "value": "chunk",
    "start": 430,
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
    "value": "c",
    "start": 436,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 438,
    "end": 439
  },
  {
    "type": "Identifier",
    "value": "chunk",
    "start": 440,
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
    "value": "d",
    "start": 446,
    "end": 447
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 452,
    "end": 458
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 459,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 461,
    "end": 462
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 524,
    "end": 532
  },
  {
    "type": "Identifier",
    "value": "isBoolean",
    "start": 533,
    "end": 542
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 542,
    "end": 543
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 543,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 548,
    "end": 549
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 550,
    "end": 551
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 556,
    "end": 562
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 563,
    "end": 569
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 570,
    "end": 575
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 576,
    "end": 579
  },
  {
    "type": "String",
    "value": "\"boolean\"",
    "start": 580,
    "end": 589
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 589,
    "end": 590
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 591,
    "end": 592
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 631,
    "end": 639
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 640,
    "end": 643
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 643,
    "end": 644
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 644,
    "end": 647
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 647,
    "end": 648
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 649,
    "end": 650
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 655,
    "end": 657
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 658,
    "end": 659
  },
  {
    "type": "Identifier",
    "value": "isBoolean",
    "start": 659,
    "end": 668
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 668,
    "end": 669
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 669,
    "end": 672
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 672,
    "end": 673
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 673,
    "end": 674
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 675,
    "end": 676
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 685,
    "end": 688
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 688,
    "end": 689
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 694,
    "end": 695
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 696,
    "end": 697
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 789,
    "end": 797
  },
  {
    "type": "Identifier",
    "value": "isNumber",
    "start": 798,
    "end": 806
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 806,
    "end": 807
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 807,
    "end": 808
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 808,
    "end": 809
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 810,
    "end": 811
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 812,
    "end": 818
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 819,
    "end": 825
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 826,
    "end": 827
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 828,
    "end": 831
  },
  {
    "type": "String",
    "value": "\"number\"",
    "start": 832,
    "end": 840
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 841,
    "end": 842
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 870,
    "end": 878
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 879,
    "end": 880
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 880,
    "end": 881
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 881,
    "end": 882
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 882,
    "end": 883
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 884,
    "end": 885
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 890,
    "end": 892
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 893,
    "end": 894
  },
  {
    "type": "Identifier",
    "value": "isNumber",
    "start": 894,
    "end": 902
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 902,
    "end": 903
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 903,
    "end": 904
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 904,
    "end": 905
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 905,
    "end": 906
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 907,
    "end": 908
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 917,
    "end": 918
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 919,
    "end": 920
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 921,
    "end": 922
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 922,
    "end": 923
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 928,
    "end": 929
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 930,
    "end": 931
  }
]
```
