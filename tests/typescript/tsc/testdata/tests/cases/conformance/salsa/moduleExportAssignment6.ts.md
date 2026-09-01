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
        "name": "C",
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
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 43,
              "end": 54
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
                  "start": 55,
                  "end": 56
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
                          "start": 68,
                          "end": 72
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 73,
                          "end": 74
                        },
                        "optional": false,
                        "computed": false,
                        "start": 68,
                        "end": 74
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 77,
                        "end": 78
                      },
                      "start": 68,
                      "end": 78
                    },
                    "directive": null,
                    "start": 68,
                    "end": 78
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 87,
                          "end": 91
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "exports",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 92,
                          "end": 99
                        },
                        "optional": false,
                        "computed": false,
                        "start": 87,
                        "end": 99
                      },
                      "right": {
                        "type": "ArrayExpression",
                        "elements": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 103,
                            "end": 104
                          }
                        ],
                        "start": 102,
                        "end": 105
                      },
                      "start": 87,
                      "end": 105
                    },
                    "directive": null,
                    "start": 87,
                    "end": 105
                  }
                ],
                "start": 58,
                "end": 111
              },
              "expression": false,
              "start": 54,
              "end": 111
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 43,
            "end": 111
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null,
              "start": 145,
              "end": 146
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
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 147,
                  "end": 148
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
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 167,
                          "end": 171
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 172,
                          "end": 173
                        },
                        "optional": false,
                        "computed": false,
                        "start": 167,
                        "end": 173
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 176,
                        "end": 177
                      },
                      "start": 167,
                      "end": 177
                    },
                    "start": 160,
                    "end": 177
                  }
                ],
                "start": 150,
                "end": 183
              },
              "expression": false,
              "start": 146,
              "end": 183
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 145,
            "end": 183
          }
        ],
        "start": 8,
        "end": 185
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 185
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "exec",
        "optional": false,
        "typeAnnotation": null,
        "start": 195,
        "end": 199
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
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "module",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 214,
                  "end": 220
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 227,
                    "end": 228
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 12,
                      "raw": "12",
                      "start": 229,
                      "end": 231
                    }
                  ],
                  "start": 223,
                  "end": 232
                },
                "definite": false,
                "start": 214,
                "end": 232
              }
            ],
            "declare": false,
            "start": 208,
            "end": 233
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "module",
                "optional": false,
                "typeAnnotation": null,
                "start": 245,
                "end": 251
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "exports",
                "optional": false,
                "typeAnnotation": null,
                "start": 252,
                "end": 259
              },
              "optional": false,
              "computed": false,
              "start": 245,
              "end": 259
            },
            "start": 238,
            "end": 260
          }
        ],
        "start": 202,
        "end": 316
      },
      "expression": false,
      "start": 186,
      "end": 316
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "tricky",
        "optional": false,
        "typeAnnotation": null,
        "start": 327,
        "end": 333
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
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "module",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 397,
                  "end": 403
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 410,
                    "end": 411
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 12,
                      "raw": "12",
                      "start": 412,
                      "end": 414
                    }
                  ],
                  "start": 406,
                  "end": 415
                },
                "definite": false,
                "start": 397,
                "end": 415
              }
            ],
            "declare": false,
            "start": 391,
            "end": 416
          },
          {
            "type": "ReturnStatement",
            "argument": {
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
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "module",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 451,
                        "end": 457
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "exports",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 458,
                        "end": 465
                      },
                      "optional": false,
                      "computed": false,
                      "start": 451,
                      "end": 465
                    },
                    "start": 444,
                    "end": 466
                  }
                ],
                "start": 434,
                "end": 472
              },
              "id": null,
              "generator": false,
              "start": 428,
              "end": 472
            },
            "start": 421,
            "end": 472
          }
        ],
        "start": 336,
        "end": 474
      },
      "expression": false,
      "start": 318,
      "end": 474
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 474
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
    "value": "C",
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
    "value": "constructor",
    "start": 43,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 54,
    "end": 55
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 55,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 56,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 58,
    "end": 59
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 68,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 72,
    "end": 73
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 73,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 75,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 77,
    "end": 78
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 87,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 91,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "exports",
    "start": 92,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 100,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 102,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 103,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 104,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 110,
    "end": 111
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 145,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 146,
    "end": 147
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 147,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 148,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 150,
    "end": 151
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 160,
    "end": 166
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 167,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 171,
    "end": 172
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 172,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 174,
    "end": 175
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 176,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 182,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 184,
    "end": 185
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 186,
    "end": 194
  },
  {
    "type": "Identifier",
    "value": "exec",
    "start": 195,
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
    "type": "Keyword",
    "value": "const",
    "start": 208,
    "end": 213
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 214,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 221,
    "end": 222
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 223,
    "end": 226
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 227,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 228,
    "end": 229
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 229,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 231,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 232,
    "end": 233
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 238,
    "end": 244
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 245,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 251,
    "end": 252
  },
  {
    "type": "Identifier",
    "value": "exports",
    "start": 252,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 259,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 315,
    "end": 316
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 318,
    "end": 326
  },
  {
    "type": "Identifier",
    "value": "tricky",
    "start": 327,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 333,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 334,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 336,
    "end": 337
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 391,
    "end": 396
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 397,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 404,
    "end": 405
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 406,
    "end": 409
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 410,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 411,
    "end": 412
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 412,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 414,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 415,
    "end": 416
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 421,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 428,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 429,
    "end": 430
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 431,
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
    "value": "return",
    "start": 444,
    "end": 450
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 451,
    "end": 457
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 457,
    "end": 458
  },
  {
    "type": "Identifier",
    "value": "exports",
    "start": 458,
    "end": 465
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 465,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 471,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 473,
    "end": 474
  }
]
```
