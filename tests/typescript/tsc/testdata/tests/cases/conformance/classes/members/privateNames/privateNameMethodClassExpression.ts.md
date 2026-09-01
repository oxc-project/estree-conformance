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
            "name": "C",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 7
          },
          "init": {
            "type": "ClassExpression",
            "decorators": [],
            "id": null,
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
                    "name": "field",
                    "start": 22,
                    "end": 28
                  },
                  "typeAnnotation": null,
                  "value": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 31,
                        "end": 35
                      },
                      "property": {
                        "type": "PrivateIdentifier",
                        "name": "method",
                        "start": 36,
                        "end": 43
                      },
                      "optional": false,
                      "computed": false,
                      "start": 31,
                      "end": 43
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 31,
                    "end": 45
                  },
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null,
                  "start": 22,
                  "end": 46
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "PrivateIdentifier",
                    "name": "method",
                    "start": 51,
                    "end": 58
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
                            "value": 42,
                            "raw": "42",
                            "start": 70,
                            "end": 72
                          },
                          "start": 63,
                          "end": 73
                        }
                      ],
                      "start": 61,
                      "end": 75
                    },
                    "expression": false,
                    "start": 58,
                    "end": 75
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 51,
                  "end": 75
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
                    "start": 87,
                    "end": 98
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
                              "name": "C",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 114,
                              "end": 115
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "start": 110,
                            "end": 117
                          },
                          "start": 103,
                          "end": 118
                        }
                      ],
                      "start": 101,
                      "end": 120
                    },
                    "expression": false,
                    "start": 98,
                    "end": 120
                  },
                  "kind": "method",
                  "computed": false,
                  "static": true,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 80,
                  "end": 120
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getField",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 125,
                    "end": 133
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
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 145,
                              "end": 149
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "name": "field",
                              "start": 150,
                              "end": 156
                            },
                            "optional": false,
                            "computed": false,
                            "start": 145,
                            "end": 156
                          },
                          "start": 138,
                          "end": 156
                        }
                      ],
                      "start": 136,
                      "end": 158
                    },
                    "expression": false,
                    "start": 133,
                    "end": 158
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 125,
                  "end": 158
                }
              ],
              "start": 16,
              "end": 161
            },
            "abstract": false,
            "declare": false,
            "start": 10,
            "end": 161
          },
          "definite": false,
          "start": 6,
          "end": 161
        }
      ],
      "declare": false,
      "start": 0,
      "end": 161
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
            "name": "console",
            "optional": false,
            "typeAnnotation": null,
            "start": 163,
            "end": 170
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "log",
            "optional": false,
            "typeAnnotation": null,
            "start": 171,
            "end": 174
          },
          "optional": false,
          "computed": false,
          "start": 163,
          "end": 174
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 175,
                    "end": 176
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getInstance",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 177,
                    "end": 188
                  },
                  "optional": false,
                  "computed": false,
                  "start": 175,
                  "end": 188
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 175,
                "end": 190
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "getField",
                "optional": false,
                "typeAnnotation": null,
                "start": 191,
                "end": 199
              },
              "optional": false,
              "computed": false,
              "start": 175,
              "end": 199
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 175,
            "end": 201
          }
        ],
        "optional": false,
        "start": 163,
        "end": 202
      },
      "directive": null,
      "start": 163,
      "end": 203
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 204,
              "end": 205
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "getInstance",
              "optional": false,
              "typeAnnotation": null,
              "start": 206,
              "end": 217
            },
            "optional": false,
            "computed": false,
            "start": 204,
            "end": 217
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 204,
          "end": 219
        },
        "property": {
          "type": "PrivateIdentifier",
          "name": "method",
          "start": 220,
          "end": 227
        },
        "optional": false,
        "computed": false,
        "start": 204,
        "end": 227
      },
      "directive": null,
      "start": 204,
      "end": 228
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 238,
              "end": 239
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "getInstance",
              "optional": false,
              "typeAnnotation": null,
              "start": 240,
              "end": 251
            },
            "optional": false,
            "computed": false,
            "start": 238,
            "end": 251
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 238,
          "end": 253
        },
        "property": {
          "type": "PrivateIdentifier",
          "name": "field",
          "start": 254,
          "end": 260
        },
        "optional": false,
        "computed": false,
        "start": 238,
        "end": 260
      },
      "directive": null,
      "start": 238,
      "end": 261
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 271
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
    "value": "C",
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
    "type": "Keyword",
    "value": "class",
    "start": 10,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 16,
    "end": 17
  },
  {
    "type": "PrivateIdentifier",
    "value": "field",
    "start": 22,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 29,
    "end": 30
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 31,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 35,
    "end": 36
  },
  {
    "type": "PrivateIdentifier",
    "value": "method",
    "start": 36,
    "end": 43
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
    "value": ";",
    "start": 45,
    "end": 46
  },
  {
    "type": "PrivateIdentifier",
    "value": "method",
    "start": 51,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 58,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 59,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 61,
    "end": 62
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 63,
    "end": 69
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 70,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": ";",
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
    "value": "getInstance",
    "start": 87,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 98,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 99,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 101,
    "end": 102
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 103,
    "end": 109
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 110,
    "end": 113
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 114,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 115,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 116,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 117,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 119,
    "end": 120
  },
  {
    "type": "Identifier",
    "value": "getField",
    "start": 125,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 133,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 134,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 136,
    "end": 137
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 138,
    "end": 144
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 145,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 149,
    "end": 150
  },
  {
    "type": "PrivateIdentifier",
    "value": "field",
    "start": 150,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "type": "Punctuator",
    "value": "}",
    "start": 160,
    "end": 161
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 163,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 170,
    "end": 171
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 171,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 174,
    "end": 175
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 175,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 176,
    "end": 177
  },
  {
    "type": "Identifier",
    "value": "getInstance",
    "start": 177,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 188,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 189,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 190,
    "end": 191
  },
  {
    "type": "Identifier",
    "value": "getField",
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
    "value": ")",
    "start": 201,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 202,
    "end": 203
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 204,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 205,
    "end": 206
  },
  {
    "type": "Identifier",
    "value": "getInstance",
    "start": 206,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 217,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 218,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 219,
    "end": 220
  },
  {
    "type": "PrivateIdentifier",
    "value": "method",
    "start": 220,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 227,
    "end": 228
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 238,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 239,
    "end": 240
  },
  {
    "type": "Identifier",
    "value": "getInstance",
    "start": 240,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 251,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 252,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 253,
    "end": 254
  },
  {
    "type": "PrivateIdentifier",
    "value": "field",
    "start": 254,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 260,
    "end": 261
  }
]
```
