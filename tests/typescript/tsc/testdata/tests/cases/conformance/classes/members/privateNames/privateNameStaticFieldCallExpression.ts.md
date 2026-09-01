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
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "name": "fieldFunc",
              "start": 21,
              "end": 31
            },
            "typeAnnotation": null,
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
                          "start": 48,
                          "end": 52
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 53,
                          "end": 54
                        },
                        "optional": false,
                        "computed": false,
                        "start": 48,
                        "end": 54
                      },
                      "right": {
                        "type": "Literal",
                        "value": 10,
                        "raw": "10",
                        "start": 57,
                        "end": 59
                      },
                      "start": 48,
                      "end": 59
                    },
                    "directive": null,
                    "start": 48,
                    "end": 60
                  }
                ],
                "start": 46,
                "end": 62
              },
              "expression": false,
              "start": 34,
              "end": 62
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 14,
            "end": 63
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "name": "fieldFunc2",
              "start": 75,
              "end": 86
            },
            "typeAnnotation": null,
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 99,
                  "end": 100
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
                    "start": 105,
                    "end": 106
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "value": null,
                  "start": 102,
                  "end": 106
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 108,
                "end": 110
              },
              "expression": false,
              "start": 89,
              "end": 110
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 68,
            "end": 111
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
              "start": 116,
              "end": 117
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 120,
              "end": 121
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 116,
            "end": 122
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
              "start": 127,
              "end": 131
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
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 144,
                          "end": 145
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "fieldFunc",
                          "start": 146,
                          "end": 156
                        },
                        "optional": false,
                        "computed": false,
                        "start": 144,
                        "end": 156
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 144,
                      "end": 158
                    },
                    "directive": null,
                    "start": 144,
                    "end": 159
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "ChainExpression",
                      "expression": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "A",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 168,
                            "end": 169
                          },
                          "property": {
                            "type": "PrivateIdentifier",
                            "name": "fieldFunc",
                            "start": 170,
                            "end": 180
                          },
                          "optional": false,
                          "computed": false,
                          "start": 168,
                          "end": 180
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": true,
                        "start": 168,
                        "end": 184
                      },
                      "start": 168,
                      "end": 184
                    },
                    "directive": null,
                    "start": 168,
                    "end": 185
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
                          "start": 200,
                          "end": 204
                        },
                        "init": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "A",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 207,
                            "end": 208
                          },
                          "property": {
                            "type": "PrivateIdentifier",
                            "name": "fieldFunc",
                            "start": 209,
                            "end": 219
                          },
                          "optional": false,
                          "computed": false,
                          "start": 207,
                          "end": 219
                        },
                        "definite": false,
                        "start": 200,
                        "end": 219
                      }
                    ],
                    "declare": false,
                    "start": 194,
                    "end": 220
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
                        "start": 229,
                        "end": 233
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 229,
                      "end": 235
                    },
                    "directive": null,
                    "start": 229,
                    "end": 236
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 249,
                          "end": 250
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "fieldFunc",
                          "start": 251,
                          "end": 261
                        },
                        "optional": false,
                        "computed": false,
                        "start": 249,
                        "end": 261
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 245,
                      "end": 263
                    },
                    "directive": null,
                    "start": 245,
                    "end": 264
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
                          "start": 280,
                          "end": 283
                        },
                        "init": {
                          "type": "ArrayExpression",
                          "elements": [
                            {
                              "type": "Literal",
                              "value": 1,
                              "raw": "1",
                              "start": 288,
                              "end": 289
                            },
                            {
                              "type": "Literal",
                              "value": 2,
                              "raw": "2",
                              "start": 291,
                              "end": 292
                            }
                          ],
                          "start": 286,
                          "end": 294
                        },
                        "definite": false,
                        "start": 280,
                        "end": 294
                      }
                    ],
                    "declare": false,
                    "start": 274,
                    "end": 295
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
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 304,
                          "end": 305
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "fieldFunc2",
                          "start": 306,
                          "end": 317
                        },
                        "optional": false,
                        "computed": false,
                        "start": 304,
                        "end": 317
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 318,
                          "end": 319
                        },
                        {
                          "type": "SpreadElement",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "arr",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 324,
                            "end": 327
                          },
                          "start": 321,
                          "end": 327
                        },
                        {
                          "type": "Literal",
                          "value": 3,
                          "raw": "3",
                          "start": 329,
                          "end": 330
                        }
                      ],
                      "optional": false,
                      "start": 304,
                      "end": 331
                    },
                    "directive": null,
                    "start": 304,
                    "end": 332
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
                          "start": 347,
                          "end": 348
                        },
                        "init": {
                          "type": "NewExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 355,
                              "end": 356
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "name": "fieldFunc2",
                              "start": 357,
                              "end": 368
                            },
                            "optional": false,
                            "computed": false,
                            "start": 355,
                            "end": 368
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Literal",
                              "value": 0,
                              "raw": "0",
                              "start": 369,
                              "end": 370
                            },
                            {
                              "type": "SpreadElement",
                              "argument": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "arr",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 375,
                                "end": 378
                              },
                              "start": 372,
                              "end": 378
                            },
                            {
                              "type": "Literal",
                              "value": 3,
                              "raw": "3",
                              "start": 380,
                              "end": 381
                            }
                          ],
                          "start": 351,
                          "end": 382
                        },
                        "definite": false,
                        "start": 347,
                        "end": 382
                      }
                    ],
                    "declare": false,
                    "start": 341,
                    "end": 383
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
                          "start": 398,
                          "end": 401
                        },
                        "init": {
                          "type": "TaggedTemplateExpression",
                          "tag": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 404,
                              "end": 405
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "name": "fieldFunc2",
                              "start": 406,
                              "end": 417
                            },
                            "optional": false,
                            "computed": false,
                            "start": 404,
                            "end": 417
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
                                "start": 417,
                                "end": 424
                              },
                              {
                                "type": "TemplateElement",
                                "value": {
                                  "raw": "middle",
                                  "cooked": "middle"
                                },
                                "tail": false,
                                "start": 425,
                                "end": 434
                              },
                              {
                                "type": "TemplateElement",
                                "value": {
                                  "raw": "tail",
                                  "cooked": "tail"
                                },
                                "tail": true,
                                "start": 435,
                                "end": 441
                              }
                            ],
                            "expressions": [
                              {
                                "type": "Literal",
                                "value": 1,
                                "raw": "1",
                                "start": 424,
                                "end": 425
                              },
                              {
                                "type": "Literal",
                                "value": 2,
                                "raw": "2",
                                "start": 434,
                                "end": 435
                              }
                            ],
                            "start": 417,
                            "end": 441
                          },
                          "start": 404,
                          "end": 441
                        },
                        "definite": false,
                        "start": 398,
                        "end": 441
                      }
                    ],
                    "declare": false,
                    "start": 392,
                    "end": 442
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
                              "start": 451,
                              "end": 455
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "getClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 456,
                              "end": 464
                            },
                            "optional": false,
                            "computed": false,
                            "start": 451,
                            "end": 464
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 451,
                          "end": 466
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "fieldFunc2",
                          "start": 467,
                          "end": 478
                        },
                        "optional": false,
                        "computed": false,
                        "start": 451,
                        "end": 478
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
                            "start": 478,
                            "end": 485
                          },
                          {
                            "type": "TemplateElement",
                            "value": {
                              "raw": "and",
                              "cooked": "and"
                            },
                            "tail": false,
                            "start": 486,
                            "end": 492
                          },
                          {
                            "type": "TemplateElement",
                            "value": {
                              "raw": "",
                              "cooked": ""
                            },
                            "tail": true,
                            "start": 493,
                            "end": 495
                          }
                        ],
                        "expressions": [
                          {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 485,
                            "end": 486
                          },
                          {
                            "type": "Literal",
                            "value": 2,
                            "raw": "2",
                            "start": 492,
                            "end": 493
                          }
                        ],
                        "start": 478,
                        "end": 495
                      },
                      "start": 451,
                      "end": 495
                    },
                    "directive": null,
                    "start": 451,
                    "end": 496
                  }
                ],
                "start": 134,
                "end": 502
              },
              "expression": false,
              "start": 131,
              "end": 502
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 127,
            "end": 502
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
              "start": 507,
              "end": 515
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
                      "start": 527,
                      "end": 528
                    },
                    "start": 520,
                    "end": 529
                  }
                ],
                "start": 518,
                "end": 531
              },
              "expression": false,
              "start": 515,
              "end": 531
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 507,
            "end": 531
          }
        ],
        "start": 8,
        "end": 533
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 533
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 533
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
    "type": "PrivateIdentifier",
    "value": "fieldFunc",
    "start": 21,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 32,
    "end": 33
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 34,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 43,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 44,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 46,
    "end": 47
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 48,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 52,
    "end": 53
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 53,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 55,
    "end": 56
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 57,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 59,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 61,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 62,
    "end": 63
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 68,
    "end": 74
  },
  {
    "type": "PrivateIdentifier",
    "value": "fieldFunc2",
    "start": 75,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 87,
    "end": 88
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 89,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 98,
    "end": 99
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 99,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 100,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 102,
    "end": 105
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 105,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 106,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 108,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 109,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 110,
    "end": 111
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 116,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 118,
    "end": 119
  },
  {
    "type": "Numeric",
    "value": "1",
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
    "value": "test",
    "start": 127,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 131,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 132,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 134,
    "end": 135
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 144,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 145,
    "end": 146
  },
  {
    "type": "PrivateIdentifier",
    "value": "fieldFunc",
    "start": 146,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 156,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 157,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 158,
    "end": 159
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 168,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 169,
    "end": 170
  },
  {
    "type": "PrivateIdentifier",
    "value": "fieldFunc",
    "start": 170,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": "?.",
    "start": 180,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 182,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 183,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 184,
    "end": 185
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 194,
    "end": 199
  },
  {
    "type": "Identifier",
    "value": "func",
    "start": 200,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 205,
    "end": 206
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 207,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 208,
    "end": 209
  },
  {
    "type": "PrivateIdentifier",
    "value": "fieldFunc",
    "start": 209,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 219,
    "end": 220
  },
  {
    "type": "Identifier",
    "value": "func",
    "start": 229,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 233,
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
    "type": "Keyword",
    "value": "new",
    "start": 245,
    "end": 248
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 249,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 250,
    "end": 251
  },
  {
    "type": "PrivateIdentifier",
    "value": "fieldFunc",
    "start": 251,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 261,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 262,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 263,
    "end": 264
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 274,
    "end": 279
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 280,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 284,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 286,
    "end": 287
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 288,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 289,
    "end": 290
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 291,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 293,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 294,
    "end": 295
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 304,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 305,
    "end": 306
  },
  {
    "type": "PrivateIdentifier",
    "value": "fieldFunc2",
    "start": 306,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 317,
    "end": 318
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 318,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 319,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 321,
    "end": 324
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 324,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 327,
    "end": 328
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 329,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Keyword",
    "value": "const",
    "start": 341,
    "end": 346
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 347,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 349,
    "end": 350
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 351,
    "end": 354
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 355,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 356,
    "end": 357
  },
  {
    "type": "PrivateIdentifier",
    "value": "fieldFunc2",
    "start": 357,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 368,
    "end": 369
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 369,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 370,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 372,
    "end": 375
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 375,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 378,
    "end": 379
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 380,
    "end": 381
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 381,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 382,
    "end": 383
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 392,
    "end": 397
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 398,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 402,
    "end": 403
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 404,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 405,
    "end": 406
  },
  {
    "type": "PrivateIdentifier",
    "value": "fieldFunc2",
    "start": 406,
    "end": 417
  },
  {
    "type": "Template",
    "value": "`head${",
    "start": 417,
    "end": 424
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 424,
    "end": 425
  },
  {
    "type": "Template",
    "value": "}middle${",
    "start": 425,
    "end": 434
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 434,
    "end": 435
  },
  {
    "type": "Template",
    "value": "}tail`",
    "start": 435,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 441,
    "end": 442
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 451,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 455,
    "end": 456
  },
  {
    "type": "Identifier",
    "value": "getClass",
    "start": 456,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 464,
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
    "type": "PrivateIdentifier",
    "value": "fieldFunc2",
    "start": 467,
    "end": 478
  },
  {
    "type": "Template",
    "value": "`test${",
    "start": 478,
    "end": 485
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 485,
    "end": 486
  },
  {
    "type": "Template",
    "value": "}and${",
    "start": 486,
    "end": 492
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 492,
    "end": 493
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 493,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 495,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 501,
    "end": 502
  },
  {
    "type": "Identifier",
    "value": "getClass",
    "start": 507,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 515,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 516,
    "end": 517
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 518,
    "end": 519
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 520,
    "end": 526
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 527,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 528,
    "end": 529
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 530,
    "end": 531
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 532,
    "end": 533
  }
]
```
