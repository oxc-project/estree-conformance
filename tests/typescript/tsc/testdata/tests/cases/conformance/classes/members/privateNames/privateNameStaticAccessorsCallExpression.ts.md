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
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 7
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
              "type": "PrivateIdentifier",
              "name": "fieldFunc",
              "start": 25,
              "end": 35
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
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "A",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 61,
                                  "end": 62
                                },
                                "property": {
                                  "type": "PrivateIdentifier",
                                  "name": "x",
                                  "start": 63,
                                  "end": 65
                                },
                                "optional": false,
                                "computed": false,
                                "start": 61,
                                "end": 65
                              },
                              "right": {
                                "type": "Literal",
                                "value": 10,
                                "raw": "10",
                                "start": 68,
                                "end": 70
                              },
                              "start": 61,
                              "end": 70
                            },
                            "directive": null,
                            "start": 61,
                            "end": 71
                          }
                        ],
                        "start": 59,
                        "end": 73
                      },
                      "expression": false,
                      "start": 48,
                      "end": 73
                    },
                    "start": 41,
                    "end": 73
                  }
                ],
                "start": 38,
                "end": 75
              },
              "expression": false,
              "start": 35,
              "end": 75
            },
            "kind": "get",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 14,
            "end": 75
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "name": "fieldFunc2",
              "start": 91,
              "end": 102
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
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 124,
                          "end": 125
                        },
                        {
                          "type": "RestElement",
                          "decorators": [],
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 130,
                            "end": 131
                          },
                          "optional": false,
                          "typeAnnotation": null,
                          "value": null,
                          "start": 127,
                          "end": 131
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 133,
                        "end": 135
                      },
                      "expression": false,
                      "start": 115,
                      "end": 135
                    },
                    "start": 107,
                    "end": 136
                  }
                ],
                "start": 105,
                "end": 138
              },
              "expression": false,
              "start": 102,
              "end": 138
            },
            "kind": "get",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 80,
            "end": 138
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "name": "x",
              "start": 150,
              "end": 152
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 155,
              "end": 156
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 143,
            "end": 157
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null,
              "start": 169,
              "end": 173
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
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 186,
                          "end": 190
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "fieldFunc",
                          "start": 191,
                          "end": 201
                        },
                        "optional": false,
                        "computed": false,
                        "start": 186,
                        "end": 201
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 186,
                      "end": 203
                    },
                    "directive": null,
                    "start": 186,
                    "end": 204
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
                          "name": "func",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 219,
                          "end": 223
                        },
                        "init": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 226,
                            "end": 230
                          },
                          "property": {
                            "type": "PrivateIdentifier",
                            "name": "fieldFunc",
                            "start": 231,
                            "end": 241
                          },
                          "optional": false,
                          "computed": false,
                          "start": 226,
                          "end": 241
                        },
                        "definite": false,
                        "start": 219,
                        "end": 241
                      }
                    ],
                    "declare": false,
                    "start": 213,
                    "end": 242
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "func",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 251,
                        "end": 255
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 251,
                      "end": 257
                    },
                    "directive": null,
                    "start": 251,
                    "end": 258
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 271,
                          "end": 275
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "fieldFunc",
                          "start": 276,
                          "end": 286
                        },
                        "optional": false,
                        "computed": false,
                        "start": 271,
                        "end": 286
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 267,
                      "end": 288
                    },
                    "directive": null,
                    "start": 267,
                    "end": 289
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
                          "name": "arr",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 305,
                          "end": 308
                        },
                        "init": {
                          "type": "ArrayExpression",
                          "elements": [
                            {
                              "type": "Literal",
                              "value": 1,
                              "raw": "1",
                              "start": 313,
                              "end": 314
                            },
                            {
                              "type": "Literal",
                              "value": 2,
                              "raw": "2",
                              "start": 316,
                              "end": 317
                            }
                          ],
                          "start": 311,
                          "end": 319
                        },
                        "definite": false,
                        "start": 305,
                        "end": 319
                      }
                    ],
                    "declare": false,
                    "start": 299,
                    "end": 320
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 329,
                          "end": 333
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "fieldFunc2",
                          "start": 334,
                          "end": 345
                        },
                        "optional": false,
                        "computed": false,
                        "start": 329,
                        "end": 345
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 346,
                          "end": 347
                        },
                        {
                          "type": "SpreadElement",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "arr",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 352,
                            "end": 355
                          },
                          "start": 349,
                          "end": 355
                        },
                        {
                          "type": "Literal",
                          "value": 3,
                          "raw": "3",
                          "start": 357,
                          "end": 358
                        }
                      ],
                      "optional": false,
                      "start": 329,
                      "end": 359
                    },
                    "directive": null,
                    "start": 329,
                    "end": 360
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
                          "start": 375,
                          "end": 376
                        },
                        "init": {
                          "type": "NewExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 383,
                              "end": 387
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "name": "fieldFunc2",
                              "start": 388,
                              "end": 399
                            },
                            "optional": false,
                            "computed": false,
                            "start": 383,
                            "end": 399
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Literal",
                              "value": 0,
                              "raw": "0",
                              "start": 400,
                              "end": 401
                            },
                            {
                              "type": "SpreadElement",
                              "argument": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "arr",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 406,
                                "end": 409
                              },
                              "start": 403,
                              "end": 409
                            },
                            {
                              "type": "Literal",
                              "value": 3,
                              "raw": "3",
                              "start": 411,
                              "end": 412
                            }
                          ],
                          "start": 379,
                          "end": 413
                        },
                        "definite": false,
                        "start": 375,
                        "end": 413
                      }
                    ],
                    "declare": false,
                    "start": 369,
                    "end": 414
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
                          "name": "str",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 429,
                          "end": 432
                        },
                        "init": {
                          "type": "TaggedTemplateExpression",
                          "tag": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 435,
                              "end": 439
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "name": "fieldFunc2",
                              "start": 440,
                              "end": 451
                            },
                            "optional": false,
                            "computed": false,
                            "start": 435,
                            "end": 451
                          },
                          "typeArguments": null,
                          "quasi": {
                            "type": "TemplateLiteral",
                            "quasis": [
                              {
                                "type": "TemplateElement",
                                "value": {
                                  "raw": "head",
                                  "cooked": "head"
                                },
                                "tail": false,
                                "start": 451,
                                "end": 458
                              },
                              {
                                "type": "TemplateElement",
                                "value": {
                                  "raw": "middle",
                                  "cooked": "middle"
                                },
                                "tail": false,
                                "start": 459,
                                "end": 468
                              },
                              {
                                "type": "TemplateElement",
                                "value": {
                                  "raw": "tail",
                                  "cooked": "tail"
                                },
                                "tail": true,
                                "start": 469,
                                "end": 475
                              }
                            ],
                            "expressions": [
                              {
                                "type": "Literal",
                                "value": 1,
                                "raw": "1",
                                "start": 458,
                                "end": 459
                              },
                              {
                                "type": "Literal",
                                "value": 2,
                                "raw": "2",
                                "start": 468,
                                "end": 469
                              }
                            ],
                            "start": 451,
                            "end": 475
                          },
                          "start": 435,
                          "end": 475
                        },
                        "definite": false,
                        "start": 429,
                        "end": 475
                      }
                    ],
                    "declare": false,
                    "start": 423,
                    "end": 476
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "TaggedTemplateExpression",
                      "tag": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 485,
                              "end": 489
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "getClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 490,
                              "end": 498
                            },
                            "optional": false,
                            "computed": false,
                            "start": 485,
                            "end": 498
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 485,
                          "end": 500
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "fieldFunc2",
                          "start": 501,
                          "end": 512
                        },
                        "optional": false,
                        "computed": false,
                        "start": 485,
                        "end": 512
                      },
                      "typeArguments": null,
                      "quasi": {
                        "type": "TemplateLiteral",
                        "quasis": [
                          {
                            "type": "TemplateElement",
                            "value": {
                              "raw": "test",
                              "cooked": "test"
                            },
                            "tail": false,
                            "start": 512,
                            "end": 519
                          },
                          {
                            "type": "TemplateElement",
                            "value": {
                              "raw": "and",
                              "cooked": "and"
                            },
                            "tail": false,
                            "start": 520,
                            "end": 526
                          },
                          {
                            "type": "TemplateElement",
                            "value": {
                              "raw": "",
                              "cooked": ""
                            },
                            "tail": true,
                            "start": 527,
                            "end": 529
                          }
                        ],
                        "expressions": [
                          {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 519,
                            "end": 520
                          },
                          {
                            "type": "Literal",
                            "value": 2,
                            "raw": "2",
                            "start": 526,
                            "end": 527
                          }
                        ],
                        "start": 512,
                        "end": 529
                      },
                      "start": 485,
                      "end": 529
                    },
                    "directive": null,
                    "start": 485,
                    "end": 530
                  }
                ],
                "start": 176,
                "end": 536
              },
              "expression": false,
              "start": 173,
              "end": 536
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 162,
            "end": 536
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "getClass",
              "optional": false,
              "typeAnnotation": null,
              "start": 548,
              "end": 556
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
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 568,
                      "end": 569
                    },
                    "start": 561,
                    "end": 570
                  }
                ],
                "start": 559,
                "end": 572
              },
              "expression": false,
              "start": 556,
              "end": 572
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 541,
            "end": 572
          }
        ],
        "start": 8,
        "end": 574
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 574
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 574
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
    "value": "A",
    "start": 6,
    "end": 7
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8,
    "end": 9
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 14,
    "end": 20
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 21,
    "end": 24
  },
  {
    "type": "PrivateIdentifier",
    "value": "fieldFunc",
    "start": 25,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 35,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Keyword",
    "value": "return",
    "start": 41,
    "end": 47
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 48,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 56,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 57,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 59,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 61,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 62,
    "end": 63
  },
  {
    "type": "PrivateIdentifier",
    "value": "x",
    "start": 63,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 66,
    "end": 67
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 68,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 70,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 72,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 74,
    "end": 75
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 80,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 87,
    "end": 90
  },
  {
    "type": "PrivateIdentifier",
    "value": "fieldFunc2",
    "start": 91,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 102,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 103,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 105,
    "end": 106
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 107,
    "end": 113
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 115,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 123,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 124,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 125,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 127,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 130,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 131,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 133,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 134,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 135,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 137,
    "end": 138
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 143,
    "end": 149
  },
  {
    "type": "PrivateIdentifier",
    "value": "x",
    "start": 150,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 153,
    "end": 154
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 155,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 156,
    "end": 157
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 162,
    "end": 168
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 169,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 173,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 174,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 176,
    "end": 177
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 186,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 190,
    "end": 191
  },
  {
    "type": "PrivateIdentifier",
    "value": "fieldFunc",
    "start": 191,
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
    "value": ";",
    "start": 203,
    "end": 204
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 213,
    "end": 218
  },
  {
    "type": "Identifier",
    "value": "func",
    "start": 219,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 224,
    "end": 225
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 226,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 230,
    "end": 231
  },
  {
    "type": "PrivateIdentifier",
    "value": "fieldFunc",
    "start": 231,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 241,
    "end": 242
  },
  {
    "type": "Identifier",
    "value": "func",
    "start": 251,
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
    "value": ")",
    "start": 256,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 257,
    "end": 258
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 267,
    "end": 270
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 271,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 275,
    "end": 276
  },
  {
    "type": "PrivateIdentifier",
    "value": "fieldFunc",
    "start": 276,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 286,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 287,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 288,
    "end": 289
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 299,
    "end": 304
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 305,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 309,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 311,
    "end": 312
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 313,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 314,
    "end": 315
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 316,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 318,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 319,
    "end": 320
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 329,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 333,
    "end": 334
  },
  {
    "type": "PrivateIdentifier",
    "value": "fieldFunc2",
    "start": 334,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 345,
    "end": 346
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 346,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 347,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 349,
    "end": 352
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 352,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 355,
    "end": 356
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 357,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "const",
    "start": 369,
    "end": 374
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 375,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 377,
    "end": 378
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 379,
    "end": 382
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 383,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 387,
    "end": 388
  },
  {
    "type": "PrivateIdentifier",
    "value": "fieldFunc2",
    "start": 388,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 399,
    "end": 400
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 400,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 401,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 403,
    "end": 406
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 406,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 409,
    "end": 410
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 411,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 412,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 413,
    "end": 414
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 423,
    "end": 428
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 429,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 433,
    "end": 434
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 435,
    "end": 439
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 439,
    "end": 440
  },
  {
    "type": "PrivateIdentifier",
    "value": "fieldFunc2",
    "start": 440,
    "end": 451
  },
  {
    "type": "Template",
    "value": "`head${",
    "start": 451,
    "end": 458
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 458,
    "end": 459
  },
  {
    "type": "Template",
    "value": "}middle${",
    "start": 459,
    "end": 468
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 468,
    "end": 469
  },
  {
    "type": "Template",
    "value": "}tail`",
    "start": 469,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 475,
    "end": 476
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 485,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 489,
    "end": 490
  },
  {
    "type": "Identifier",
    "value": "getClass",
    "start": 490,
    "end": 498
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 498,
    "end": 499
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 499,
    "end": 500
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 500,
    "end": 501
  },
  {
    "type": "PrivateIdentifier",
    "value": "fieldFunc2",
    "start": 501,
    "end": 512
  },
  {
    "type": "Template",
    "value": "`test${",
    "start": 512,
    "end": 519
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 519,
    "end": 520
  },
  {
    "type": "Template",
    "value": "}and${",
    "start": 520,
    "end": 526
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 526,
    "end": 527
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 527,
    "end": 529
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 529,
    "end": 530
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 535,
    "end": 536
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 541,
    "end": 547
  },
  {
    "type": "Identifier",
    "value": "getClass",
    "start": 548,
    "end": 556
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 556,
    "end": 557
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 557,
    "end": 558
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 559,
    "end": 560
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 561,
    "end": 567
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 568,
    "end": 569
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 569,
    "end": 570
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 571,
    "end": 572
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 573,
    "end": 574
  }
]
```
