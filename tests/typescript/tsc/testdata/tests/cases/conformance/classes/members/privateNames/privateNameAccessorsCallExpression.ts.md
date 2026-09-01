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
              "start": 18,
              "end": 28
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
                                  "type": "ThisExpression",
                                  "start": 54,
                                  "end": 58
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 59,
                                  "end": 60
                                },
                                "optional": false,
                                "computed": false,
                                "start": 54,
                                "end": 60
                              },
                              "right": {
                                "type": "Literal",
                                "value": 10,
                                "raw": "10",
                                "start": 63,
                                "end": 65
                              },
                              "start": 54,
                              "end": 65
                            },
                            "directive": null,
                            "start": 54,
                            "end": 66
                          }
                        ],
                        "start": 52,
                        "end": 68
                      },
                      "expression": false,
                      "start": 41,
                      "end": 68
                    },
                    "start": 34,
                    "end": 68
                  }
                ],
                "start": 31,
                "end": 70
              },
              "expression": false,
              "start": 28,
              "end": 70
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 14,
            "end": 70
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "name": "fieldFunc2",
              "start": 79,
              "end": 90
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
                          "start": 112,
                          "end": 113
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
                            "start": 118,
                            "end": 119
                          },
                          "optional": false,
                          "typeAnnotation": null,
                          "value": null,
                          "start": 115,
                          "end": 119
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 121,
                        "end": 123
                      },
                      "expression": false,
                      "start": 103,
                      "end": 123
                    },
                    "start": 95,
                    "end": 124
                  }
                ],
                "start": 93,
                "end": 126
              },
              "expression": false,
              "start": 90,
              "end": 126
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 75,
            "end": 126
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 131,
              "end": 132
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 135,
              "end": 136
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 131,
            "end": 137
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
              "start": 142,
              "end": 146
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
                          "start": 159,
                          "end": 163
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "fieldFunc",
                          "start": 164,
                          "end": 174
                        },
                        "optional": false,
                        "computed": false,
                        "start": 159,
                        "end": 174
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 159,
                      "end": 176
                    },
                    "directive": null,
                    "start": 159,
                    "end": 177
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
                          "start": 192,
                          "end": 196
                        },
                        "init": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 199,
                            "end": 203
                          },
                          "property": {
                            "type": "PrivateIdentifier",
                            "name": "fieldFunc",
                            "start": 204,
                            "end": 214
                          },
                          "optional": false,
                          "computed": false,
                          "start": 199,
                          "end": 214
                        },
                        "definite": false,
                        "start": 192,
                        "end": 214
                      }
                    ],
                    "declare": false,
                    "start": 186,
                    "end": 215
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
                        "start": 224,
                        "end": 228
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 224,
                      "end": 230
                    },
                    "directive": null,
                    "start": 224,
                    "end": 231
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 244,
                          "end": 248
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "fieldFunc",
                          "start": 249,
                          "end": 259
                        },
                        "optional": false,
                        "computed": false,
                        "start": 244,
                        "end": 259
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 240,
                      "end": 261
                    },
                    "directive": null,
                    "start": 240,
                    "end": 262
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
                          "start": 278,
                          "end": 281
                        },
                        "init": {
                          "type": "ArrayExpression",
                          "elements": [
                            {
                              "type": "Literal",
                              "value": 1,
                              "raw": "1",
                              "start": 286,
                              "end": 287
                            },
                            {
                              "type": "Literal",
                              "value": 2,
                              "raw": "2",
                              "start": 289,
                              "end": 290
                            }
                          ],
                          "start": 284,
                          "end": 292
                        },
                        "definite": false,
                        "start": 278,
                        "end": 292
                      }
                    ],
                    "declare": false,
                    "start": 272,
                    "end": 293
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 302,
                          "end": 306
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "fieldFunc2",
                          "start": 307,
                          "end": 318
                        },
                        "optional": false,
                        "computed": false,
                        "start": 302,
                        "end": 318
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 319,
                          "end": 320
                        },
                        {
                          "type": "SpreadElement",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "arr",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 325,
                            "end": 328
                          },
                          "start": 322,
                          "end": 328
                        },
                        {
                          "type": "Literal",
                          "value": 3,
                          "raw": "3",
                          "start": 330,
                          "end": 331
                        }
                      ],
                      "optional": false,
                      "start": 302,
                      "end": 332
                    },
                    "directive": null,
                    "start": 302,
                    "end": 333
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
                          "start": 348,
                          "end": 349
                        },
                        "init": {
                          "type": "NewExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 356,
                              "end": 360
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "name": "fieldFunc2",
                              "start": 361,
                              "end": 372
                            },
                            "optional": false,
                            "computed": false,
                            "start": 356,
                            "end": 372
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Literal",
                              "value": 0,
                              "raw": "0",
                              "start": 373,
                              "end": 374
                            },
                            {
                              "type": "SpreadElement",
                              "argument": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "arr",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 379,
                                "end": 382
                              },
                              "start": 376,
                              "end": 382
                            },
                            {
                              "type": "Literal",
                              "value": 3,
                              "raw": "3",
                              "start": 384,
                              "end": 385
                            }
                          ],
                          "start": 352,
                          "end": 386
                        },
                        "definite": false,
                        "start": 348,
                        "end": 386
                      }
                    ],
                    "declare": false,
                    "start": 342,
                    "end": 387
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
                          "start": 402,
                          "end": 405
                        },
                        "init": {
                          "type": "TaggedTemplateExpression",
                          "tag": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 408,
                              "end": 412
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "name": "fieldFunc2",
                              "start": 413,
                              "end": 424
                            },
                            "optional": false,
                            "computed": false,
                            "start": 408,
                            "end": 424
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
                                "start": 424,
                                "end": 431
                              },
                              {
                                "type": "TemplateElement",
                                "value": {
                                  "raw": "middle",
                                  "cooked": "middle"
                                },
                                "tail": false,
                                "start": 432,
                                "end": 441
                              },
                              {
                                "type": "TemplateElement",
                                "value": {
                                  "raw": "tail",
                                  "cooked": "tail"
                                },
                                "tail": true,
                                "start": 442,
                                "end": 448
                              }
                            ],
                            "expressions": [
                              {
                                "type": "Literal",
                                "value": 1,
                                "raw": "1",
                                "start": 431,
                                "end": 432
                              },
                              {
                                "type": "Literal",
                                "value": 2,
                                "raw": "2",
                                "start": 441,
                                "end": 442
                              }
                            ],
                            "start": 424,
                            "end": 448
                          },
                          "start": 408,
                          "end": 448
                        },
                        "definite": false,
                        "start": 402,
                        "end": 448
                      }
                    ],
                    "declare": false,
                    "start": 396,
                    "end": 449
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
                              "start": 458,
                              "end": 462
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "getInstance",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 463,
                              "end": 474
                            },
                            "optional": false,
                            "computed": false,
                            "start": 458,
                            "end": 474
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 458,
                          "end": 476
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "fieldFunc2",
                          "start": 477,
                          "end": 488
                        },
                        "optional": false,
                        "computed": false,
                        "start": 458,
                        "end": 488
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
                            "start": 488,
                            "end": 495
                          },
                          {
                            "type": "TemplateElement",
                            "value": {
                              "raw": "and",
                              "cooked": "and"
                            },
                            "tail": false,
                            "start": 496,
                            "end": 502
                          },
                          {
                            "type": "TemplateElement",
                            "value": {
                              "raw": "",
                              "cooked": ""
                            },
                            "tail": true,
                            "start": 503,
                            "end": 505
                          }
                        ],
                        "expressions": [
                          {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 495,
                            "end": 496
                          },
                          {
                            "type": "Literal",
                            "value": 2,
                            "raw": "2",
                            "start": 502,
                            "end": 503
                          }
                        ],
                        "start": 488,
                        "end": 505
                      },
                      "start": 458,
                      "end": 505
                    },
                    "directive": null,
                    "start": 458,
                    "end": 506
                  }
                ],
                "start": 149,
                "end": 512
              },
              "expression": false,
              "start": 146,
              "end": 512
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 142,
            "end": 512
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "getInstance",
              "optional": false,
              "typeAnnotation": null,
              "start": 517,
              "end": 528
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
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 544,
                        "end": 545
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 540,
                      "end": 547
                    },
                    "start": 533,
                    "end": 548
                  }
                ],
                "start": 531,
                "end": 550
              },
              "expression": false,
              "start": 528,
              "end": 550
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 517,
            "end": 550
          }
        ],
        "start": 8,
        "end": 552
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 552
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 552
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
    "type": "Identifier",
    "value": "get",
    "start": 14,
    "end": 17
  },
  {
    "type": "PrivateIdentifier",
    "value": "fieldFunc",
    "start": 18,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 28,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 29,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 31,
    "end": 32
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 34,
    "end": 40
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 41,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 49,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 50,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 52,
    "end": 53
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 54,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 58,
    "end": 59
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
    "type": "Numeric",
    "value": "10",
    "start": 63,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 65,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 67,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 69,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 75,
    "end": 78
  },
  {
    "type": "PrivateIdentifier",
    "value": "fieldFunc2",
    "start": 79,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 90,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 91,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 93,
    "end": 94
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 95,
    "end": 101
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 103,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 111,
    "end": 112
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 112,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 113,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 115,
    "end": 118
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 118,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 119,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 121,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 122,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 123,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 125,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 131,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": "=",
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
    "value": ";",
    "start": 136,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 142,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 146,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 147,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 149,
    "end": 150
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 159,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 163,
    "end": 164
  },
  {
    "type": "PrivateIdentifier",
    "value": "fieldFunc",
    "start": 164,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 174,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 175,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 176,
    "end": 177
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 186,
    "end": 191
  },
  {
    "type": "Identifier",
    "value": "func",
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
    "type": "Keyword",
    "value": "this",
    "start": 199,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 203,
    "end": 204
  },
  {
    "type": "PrivateIdentifier",
    "value": "fieldFunc",
    "start": 204,
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
    "value": "func",
    "start": 224,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 228,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 229,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 230,
    "end": 231
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 240,
    "end": 243
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 244,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 248,
    "end": 249
  },
  {
    "type": "PrivateIdentifier",
    "value": "fieldFunc",
    "start": 249,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 259,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 260,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 261,
    "end": 262
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 272,
    "end": 277
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 278,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 282,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 284,
    "end": 285
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 286,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 287,
    "end": 288
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 289,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 291,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 292,
    "end": 293
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 302,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 306,
    "end": 307
  },
  {
    "type": "PrivateIdentifier",
    "value": "fieldFunc2",
    "start": 307,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 318,
    "end": 319
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 319,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 320,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 322,
    "end": 325
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 325,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 328,
    "end": 329
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 330,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 331,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 332,
    "end": 333
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 342,
    "end": 347
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 348,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 350,
    "end": 351
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 352,
    "end": 355
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 356,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 360,
    "end": 361
  },
  {
    "type": "PrivateIdentifier",
    "value": "fieldFunc2",
    "start": 361,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 372,
    "end": 373
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 373,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 374,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 376,
    "end": 379
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 379,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 382,
    "end": 383
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 384,
    "end": 385
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 385,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 386,
    "end": 387
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 396,
    "end": 401
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 402,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 406,
    "end": 407
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 408,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 412,
    "end": 413
  },
  {
    "type": "PrivateIdentifier",
    "value": "fieldFunc2",
    "start": 413,
    "end": 424
  },
  {
    "type": "Template",
    "value": "`head${",
    "start": 424,
    "end": 431
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 431,
    "end": 432
  },
  {
    "type": "Template",
    "value": "}middle${",
    "start": 432,
    "end": 441
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 441,
    "end": 442
  },
  {
    "type": "Template",
    "value": "}tail`",
    "start": 442,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 448,
    "end": 449
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 458,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 462,
    "end": 463
  },
  {
    "type": "Identifier",
    "value": "getInstance",
    "start": 463,
    "end": 474
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 474,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 475,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 476,
    "end": 477
  },
  {
    "type": "PrivateIdentifier",
    "value": "fieldFunc2",
    "start": 477,
    "end": 488
  },
  {
    "type": "Template",
    "value": "`test${",
    "start": 488,
    "end": 495
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 495,
    "end": 496
  },
  {
    "type": "Template",
    "value": "}and${",
    "start": 496,
    "end": 502
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 502,
    "end": 503
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 503,
    "end": 505
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 505,
    "end": 506
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 511,
    "end": 512
  },
  {
    "type": "Identifier",
    "value": "getInstance",
    "start": 517,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 528,
    "end": 529
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 529,
    "end": 530
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 531,
    "end": 532
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 533,
    "end": 539
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 540,
    "end": 543
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 544,
    "end": 545
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 545,
    "end": 546
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 546,
    "end": 547
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 547,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 549,
    "end": 550
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 551,
    "end": 552
  }
]
```
