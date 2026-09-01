__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 16,
          "end": 19
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
                "value": "foo",
                "raw": "\"foo\"",
                "start": 31,
                "end": 36
              },
              "start": 24,
              "end": 37
            }
          ],
          "start": 22,
          "end": 39
        },
        "expression": false,
        "start": 7,
        "end": 39
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 39
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 40
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 0,
    "end": 6
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 7,
    "end": 15
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 16,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 19,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 20,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 22,
    "end": 23
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 24,
    "end": 30
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 31,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 38,
    "end": 39
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ImportExpression",
        "source": {
          "type": "Literal",
          "value": "./0",
          "raw": "\"./0\"",
          "start": 7,
          "end": 12
        },
        "options": null,
        "phase": null,
        "start": 0,
        "end": 13
      },
      "directive": null,
      "start": 0,
      "end": 14
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
            "name": "p1",
            "optional": false,
            "typeAnnotation": null,
            "start": 19,
            "end": 21
          },
          "init": {
            "type": "ImportExpression",
            "source": {
              "type": "Literal",
              "value": "./0",
              "raw": "\"./0\"",
              "start": 31,
              "end": 36
            },
            "options": null,
            "phase": null,
            "start": 24,
            "end": 37
          },
          "definite": false,
          "start": 19,
          "end": 37
        }
      ],
      "declare": false,
      "start": 15,
      "end": 38
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
            "name": "p1",
            "optional": false,
            "typeAnnotation": null,
            "start": 39,
            "end": 41
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "then",
            "optional": false,
            "typeAnnotation": null,
            "start": 42,
            "end": 46
          },
          "optional": false,
          "computed": false,
          "start": 39,
          "end": 46
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "zero",
                "optional": false,
                "typeAnnotation": null,
                "start": 47,
                "end": 51
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
                        "name": "zero",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 68,
                        "end": 72
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 73,
                        "end": 76
                      },
                      "optional": false,
                      "computed": false,
                      "start": 68,
                      "end": 76
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 68,
                    "end": 78
                  },
                  "start": 61,
                  "end": 79
                }
              ],
              "start": 55,
              "end": 81
            },
            "id": null,
            "generator": false,
            "start": 47,
            "end": 81
          }
        ],
        "optional": false,
        "start": 39,
        "end": 82
      },
      "directive": null,
      "start": 39,
      "end": 83
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "p2",
              "optional": false,
              "typeAnnotation": null,
              "start": 96,
              "end": 98
            },
            "init": {
              "type": "ImportExpression",
              "source": {
                "type": "Literal",
                "value": "./0",
                "raw": "\"./0\"",
                "start": 108,
                "end": 113
              },
              "options": null,
              "phase": null,
              "start": 101,
              "end": 114
            },
            "definite": false,
            "start": 96,
            "end": 114
          }
        ],
        "declare": false,
        "start": 92,
        "end": 115
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 85,
      "end": 115
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 126,
        "end": 129
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
                  "name": "p2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 144,
                  "end": 146
                },
                "init": {
                  "type": "ImportExpression",
                  "source": {
                    "type": "Literal",
                    "value": "./0",
                    "raw": "\"./0\"",
                    "start": 156,
                    "end": 161
                  },
                  "options": null,
                  "phase": null,
                  "start": 149,
                  "end": 162
                },
                "definite": false,
                "start": 144,
                "end": 162
              }
            ],
            "declare": false,
            "start": 138,
            "end": 163
          }
        ],
        "start": 132,
        "end": 165
      },
      "expression": false,
      "start": 117,
      "end": 165
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 173,
        "end": 174
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
              "name": "method",
              "optional": false,
              "typeAnnotation": null,
              "start": 181,
              "end": 187
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
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "loadAsync",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 206,
                          "end": 215
                        },
                        "init": {
                          "type": "ImportExpression",
                          "source": {
                            "type": "Literal",
                            "value": "./0",
                            "raw": "\"./0\"",
                            "start": 226,
                            "end": 231
                          },
                          "options": null,
                          "phase": null,
                          "start": 218,
                          "end": 232
                        },
                        "definite": false,
                        "start": 206,
                        "end": 232
                      }
                    ],
                    "declare": false,
                    "start": 200,
                    "end": 233
                  }
                ],
                "start": 190,
                "end": 239
              },
              "expression": false,
              "start": 187,
              "end": 239
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 181,
            "end": 239
          }
        ],
        "start": 175,
        "end": 241
      },
      "abstract": false,
      "declare": false,
      "start": 167,
      "end": 241
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "D",
          "optional": false,
          "typeAnnotation": null,
          "start": 256,
          "end": 257
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
                "name": "method",
                "optional": false,
                "typeAnnotation": null,
                "start": 264,
                "end": 270
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
                      "kind": "const",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "id": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "loadAsync",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 289,
                            "end": 298
                          },
                          "init": {
                            "type": "ImportExpression",
                            "source": {
                              "type": "Literal",
                              "value": "./0",
                              "raw": "\"./0\"",
                              "start": 309,
                              "end": 314
                            },
                            "options": null,
                            "phase": null,
                            "start": 301,
                            "end": 315
                          },
                          "definite": false,
                          "start": 289,
                          "end": 315
                        }
                      ],
                      "declare": false,
                      "start": 283,
                      "end": 316
                    }
                  ],
                  "start": 273,
                  "end": 322
                },
                "expression": false,
                "start": 270,
                "end": 322
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 264,
              "end": 322
            }
          ],
          "start": 258,
          "end": 324
        },
        "abstract": false,
        "declare": false,
        "start": 250,
        "end": 324
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 243,
      "end": 324
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 324
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 0,
    "end": 6
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6,
    "end": 7
  },
  {
    "type": "String",
    "value": "\"./0\"",
    "start": 7,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 12,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 13,
    "end": 14
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 15,
    "end": 18
  },
  {
    "type": "Identifier",
    "value": "p1",
    "start": 19,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 22,
    "end": 23
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 24,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 30,
    "end": 31
  },
  {
    "type": "String",
    "value": "\"./0\"",
    "start": 31,
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
    "value": ";",
    "start": 37,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "p1",
    "start": 39,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 41,
    "end": 42
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 42,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 46,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "zero",
    "start": 47,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 52,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 55,
    "end": 56
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 61,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "zero",
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
    "value": "foo",
    "start": 73,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 76,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 77,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 78,
    "end": 79
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
    "value": ";",
    "start": 82,
    "end": 83
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 85,
    "end": 91
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 92,
    "end": 95
  },
  {
    "type": "Identifier",
    "value": "p2",
    "start": 96,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 99,
    "end": 100
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 101,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 107,
    "end": 108
  },
  {
    "type": "String",
    "value": "\"./0\"",
    "start": 108,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 113,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 114,
    "end": 115
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 117,
    "end": 125
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 126,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 129,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 130,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 132,
    "end": 133
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 138,
    "end": 143
  },
  {
    "type": "Identifier",
    "value": "p2",
    "start": 144,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 147,
    "end": 148
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 149,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 155,
    "end": 156
  },
  {
    "type": "String",
    "value": "\"./0\"",
    "start": 156,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 161,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 162,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 164,
    "end": 165
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 167,
    "end": 172
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 173,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 175,
    "end": 176
  },
  {
    "type": "Identifier",
    "value": "method",
    "start": 181,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 187,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 188,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 190,
    "end": 191
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 200,
    "end": 205
  },
  {
    "type": "Identifier",
    "value": "loadAsync",
    "start": 206,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 216,
    "end": 217
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 218,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 225,
    "end": 226
  },
  {
    "type": "String",
    "value": "\"./0\"",
    "start": 226,
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
    "type": "Punctuator",
    "value": "}",
    "start": 238,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 240,
    "end": 241
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 243,
    "end": 249
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 250,
    "end": 255
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 256,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 258,
    "end": 259
  },
  {
    "type": "Identifier",
    "value": "method",
    "start": 264,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 270,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 271,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 273,
    "end": 274
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 283,
    "end": 288
  },
  {
    "type": "Identifier",
    "value": "loadAsync",
    "start": 289,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 299,
    "end": 300
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 301,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 308,
    "end": 309
  },
  {
    "type": "String",
    "value": "\"./0\"",
    "start": 309,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 314,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 315,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 321,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 323,
    "end": 324
  }
]
```
