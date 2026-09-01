__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MouseEvent",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 20
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 27,
              "end": 28
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 30,
                "end": 36
              },
              "start": 28,
              "end": 36
            },
            "accessibility": null,
            "static": false,
            "start": 27,
            "end": 37
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 42,
              "end": 43
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 45,
                "end": 51
              },
              "start": 43,
              "end": 51
            },
            "accessibility": null,
            "static": false,
            "start": 42,
            "end": 52
          }
        ],
        "start": 21,
        "end": 54
      },
      "declare": false,
      "start": 0,
      "end": 54
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
            "name": "window",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Window",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 76,
                  "end": 82
                },
                "typeArguments": null,
                "start": 76,
                "end": 82
              },
              "start": 74,
              "end": 82
            },
            "start": 68,
            "end": 82
          },
          "init": null,
          "definite": false,
          "start": 68,
          "end": 82
        }
      ],
      "declare": true,
      "start": 56,
      "end": 83
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Window",
        "optional": false,
        "typeAnnotation": null,
        "start": 94,
        "end": 100
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "onmousemove",
              "optional": false,
              "typeAnnotation": null,
              "start": 107,
              "end": 118
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ev",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "MouseEvent",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 125,
                          "end": 135
                        },
                        "typeArguments": null,
                        "start": 125,
                        "end": 135
                      },
                      "start": 123,
                      "end": 135
                    },
                    "start": 121,
                    "end": 135
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 140,
                    "end": 143
                  },
                  "start": 137,
                  "end": 143
                },
                "start": 120,
                "end": 143
              },
              "start": 118,
              "end": 143
            },
            "accessibility": null,
            "static": false,
            "start": 107,
            "end": 144
          }
        ],
        "start": 101,
        "end": 151
      },
      "declare": false,
      "start": 84,
      "end": 151
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
            "start": 156,
            "end": 157
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
                  "name": "counter",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 167,
                  "end": 174
                },
                "value": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 176,
                  "end": 177
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 167,
                "end": 177
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "start",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 184,
                  "end": 189
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
                              "type": "Identifier",
                              "decorators": [],
                              "name": "window",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 213,
                              "end": 219
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "onmousemove",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 220,
                              "end": 231
                            },
                            "optional": false,
                            "computed": false,
                            "start": 213,
                            "end": 231
                          },
                          "right": {
                            "type": "ArrowFunctionExpression",
                            "expression": false,
                            "async": false,
                            "typeParameters": null,
                            "params": [],
                            "returnType": null,
                            "body": {
                              "type": "BlockStatement",
                              "body": [
                                {
                                  "type": "ExpressionStatement",
                                  "expression": {
                                    "type": "UpdateExpression",
                                    "operator": "++",
                                    "prefix": false,
                                    "argument": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "ThisExpression",
                                        "start": 254,
                                        "end": 258
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "counter",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 259,
                                        "end": 266
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 254,
                                      "end": 266
                                    },
                                    "start": 254,
                                    "end": 268
                                  },
                                  "directive": null,
                                  "start": 254,
                                  "end": 268
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
                                        "name": "f",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 285,
                                        "end": 286
                                      },
                                      "init": {
                                        "type": "ArrowFunctionExpression",
                                        "expression": true,
                                        "async": false,
                                        "typeParameters": null,
                                        "params": [],
                                        "returnType": null,
                                        "body": {
                                          "type": "MemberExpression",
                                          "object": {
                                            "type": "ThisExpression",
                                            "start": 295,
                                            "end": 299
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "counter",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 300,
                                            "end": 307
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 295,
                                          "end": 307
                                        },
                                        "id": null,
                                        "generator": false,
                                        "start": 289,
                                        "end": 307
                                      },
                                      "definite": false,
                                      "start": 285,
                                      "end": 307
                                    }
                                  ],
                                  "declare": false,
                                  "start": 281,
                                  "end": 308
                                }
                              ],
                              "start": 240,
                              "end": 319
                            },
                            "id": null,
                            "generator": false,
                            "start": 234,
                            "end": 319
                          },
                          "start": 213,
                          "end": 319
                        },
                        "directive": null,
                        "start": 213,
                        "end": 319
                      }
                    ],
                    "start": 202,
                    "end": 326
                  },
                  "expression": false,
                  "start": 191,
                  "end": 326
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 184,
                "end": 326
              }
            ],
            "start": 160,
            "end": 329
          },
          "definite": false,
          "start": 156,
          "end": 329
        }
      ],
      "declare": false,
      "start": 152,
      "end": 329
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X",
        "optional": false,
        "typeAnnotation": null,
        "start": 339,
        "end": 340
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
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 352,
              "end": 357
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": "value",
              "raw": "\"value\"",
              "start": 360,
              "end": 367
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 344,
            "end": 368
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 378,
              "end": 381
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
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "outer",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 392,
                          "end": 397
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "expression": false,
                          "async": false,
                          "typeParameters": null,
                          "params": [],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "VariableDeclaration",
                                "kind": "var",
                                "declarations": [
                                  {
                                    "type": "VariableDeclarator",
                                    "id": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 423,
                                      "end": 424
                                    },
                                    "init": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "ThisExpression",
                                        "start": 427,
                                        "end": 431
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "value",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 432,
                                        "end": 437
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 427,
                                      "end": 437
                                    },
                                    "definite": false,
                                    "start": 423,
                                    "end": 437
                                  }
                                ],
                                "declare": false,
                                "start": 419,
                                "end": 438
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
                                      "name": "inner",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 455,
                                      "end": 460
                                    },
                                    "init": {
                                      "type": "ArrowFunctionExpression",
                                      "expression": false,
                                      "async": false,
                                      "typeParameters": null,
                                      "params": [],
                                      "returnType": null,
                                      "body": {
                                        "type": "BlockStatement",
                                        "body": [
                                          {
                                            "type": "VariableDeclaration",
                                            "kind": "var",
                                            "declarations": [
                                              {
                                                "type": "VariableDeclarator",
                                                "id": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "y",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 491,
                                                  "end": 492
                                                },
                                                "init": {
                                                  "type": "MemberExpression",
                                                  "object": {
                                                    "type": "ThisExpression",
                                                    "start": 495,
                                                    "end": 499
                                                  },
                                                  "property": {
                                                    "type": "Identifier",
                                                    "decorators": [],
                                                    "name": "value",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 500,
                                                    "end": 505
                                                  },
                                                  "optional": false,
                                                  "computed": false,
                                                  "start": 495,
                                                  "end": 505
                                                },
                                                "definite": false,
                                                "start": 491,
                                                "end": 505
                                              }
                                            ],
                                            "declare": false,
                                            "start": 487,
                                            "end": 506
                                          }
                                        ],
                                        "start": 469,
                                        "end": 511
                                      },
                                      "id": null,
                                      "generator": false,
                                      "start": 463,
                                      "end": 511
                                    },
                                    "definite": false,
                                    "start": 455,
                                    "end": 511
                                  }
                                ],
                                "declare": false,
                                "start": 451,
                                "end": 511
                              },
                              {
                                "type": "ExpressionStatement",
                                "expression": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "inner",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 516,
                                    "end": 521
                                  },
                                  "typeArguments": null,
                                  "arguments": [],
                                  "optional": false,
                                  "start": 516,
                                  "end": 523
                                },
                                "directive": null,
                                "start": 516,
                                "end": 524
                              }
                            ],
                            "start": 405,
                            "end": 529
                          },
                          "id": null,
                          "generator": false,
                          "start": 399,
                          "end": 529
                        },
                        "definite": false,
                        "start": 392,
                        "end": 529
                      }
                    ],
                    "declare": false,
                    "start": 388,
                    "end": 530
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "outer",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 533,
                        "end": 538
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 533,
                      "end": 540
                    },
                    "directive": null,
                    "start": 533,
                    "end": 541
                  }
                ],
                "start": 384,
                "end": 544
              },
              "expression": false,
              "start": 381,
              "end": 544
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 371,
            "end": 544
          }
        ],
        "start": 341,
        "end": 547
      },
      "abstract": false,
      "declare": false,
      "start": 333,
      "end": 547
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 547
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 0,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "MouseEvent",
    "start": 10,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 21,
    "end": 22
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 27,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 28,
    "end": 29
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 30,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 36,
    "end": 37
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 42,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 43,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 45,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 51,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 53,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 56,
    "end": 63
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 64,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "window",
    "start": 68,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 74,
    "end": 75
  },
  {
    "type": "Identifier",
    "value": "Window",
    "start": 76,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 82,
    "end": 83
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 84,
    "end": 93
  },
  {
    "type": "Identifier",
    "value": "Window",
    "start": 94,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 101,
    "end": 102
  },
  {
    "type": "Identifier",
    "value": "onmousemove",
    "start": 107,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 118,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 120,
    "end": 121
  },
  {
    "type": "Identifier",
    "value": "ev",
    "start": 121,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 123,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "MouseEvent",
    "start": 125,
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
    "value": "=>",
    "start": 137,
    "end": 139
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 140,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 143,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 150,
    "end": 151
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 152,
    "end": 155
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 156,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 158,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 160,
    "end": 161
  },
  {
    "type": "Identifier",
    "value": "counter",
    "start": 167,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 174,
    "end": 175
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 176,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 177,
    "end": 178
  },
  {
    "type": "Identifier",
    "value": "start",
    "start": 184,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 189,
    "end": 190
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 191,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 199,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 200,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 202,
    "end": 203
  },
  {
    "type": "Identifier",
    "value": "window",
    "start": 213,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 219,
    "end": 220
  },
  {
    "type": "Identifier",
    "value": "onmousemove",
    "start": 220,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 232,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 234,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 235,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 237,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 240,
    "end": 241
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 254,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 258,
    "end": 259
  },
  {
    "type": "Identifier",
    "value": "counter",
    "start": 259,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 266,
    "end": 268
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 281,
    "end": 284
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 285,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 287,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 289,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 290,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 292,
    "end": 294
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 295,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 299,
    "end": 300
  },
  {
    "type": "Identifier",
    "value": "counter",
    "start": 300,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 307,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 318,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 325,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 328,
    "end": 329
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 333,
    "end": 338
  },
  {
    "type": "Identifier",
    "value": "X",
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
    "type": "Keyword",
    "value": "private",
    "start": 344,
    "end": 351
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 352,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 358,
    "end": 359
  },
  {
    "type": "String",
    "value": "\"value\"",
    "start": 360,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 367,
    "end": 368
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 371,
    "end": 377
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 378,
    "end": 381
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 381,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 382,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 384,
    "end": 385
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 388,
    "end": 391
  },
  {
    "type": "Identifier",
    "value": "outer",
    "start": 392,
    "end": 397
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 397,
    "end": 398
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 399,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 400,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 402,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 405,
    "end": 406
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 419,
    "end": 422
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 423,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 425,
    "end": 426
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 427,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 431,
    "end": 432
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 432,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 437,
    "end": 438
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 451,
    "end": 454
  },
  {
    "type": "Identifier",
    "value": "inner",
    "start": 455,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 461,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 463,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 464,
    "end": 465
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 466,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 469,
    "end": 470
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 487,
    "end": 490
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 491,
    "end": 492
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 493,
    "end": 494
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 495,
    "end": 499
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 499,
    "end": 500
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 500,
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
    "start": 510,
    "end": 511
  },
  {
    "type": "Identifier",
    "value": "inner",
    "start": 516,
    "end": 521
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 521,
    "end": 522
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 522,
    "end": 523
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 523,
    "end": 524
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 528,
    "end": 529
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 529,
    "end": 530
  },
  {
    "type": "Identifier",
    "value": "outer",
    "start": 533,
    "end": 538
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 538,
    "end": 539
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 539,
    "end": 540
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 540,
    "end": 541
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 543,
    "end": 544
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 546,
    "end": 547
  }
]
```
