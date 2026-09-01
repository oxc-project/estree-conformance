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
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null,
              "start": 16,
              "end": 17
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
                    "name": "field",
                    "start": 31,
                    "end": 37
                  },
                  "typeAnnotation": null,
                  "value": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "D",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 40,
                        "end": 41
                      },
                      "property": {
                        "type": "PrivateIdentifier",
                        "name": "method",
                        "start": 42,
                        "end": 49
                      },
                      "optional": false,
                      "computed": false,
                      "start": 40,
                      "end": 49
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 40,
                    "end": 51
                  },
                  "computed": false,
                  "static": true,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null,
                  "start": 24,
                  "end": 52
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "PrivateIdentifier",
                    "name": "method",
                    "start": 64,
                    "end": 71
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
                            "start": 83,
                            "end": 85
                          },
                          "start": 76,
                          "end": 86
                        }
                      ],
                      "start": 74,
                      "end": 88
                    },
                    "expression": false,
                    "start": 71,
                    "end": 88
                  },
                  "kind": "method",
                  "computed": false,
                  "static": true,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 57,
                  "end": 88
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
                    "start": 100,
                    "end": 108
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
                            "name": "D",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 120,
                            "end": 121
                          },
                          "start": 113,
                          "end": 122
                        }
                      ],
                      "start": 111,
                      "end": 124
                    },
                    "expression": false,
                    "start": 108,
                    "end": 124
                  },
                  "kind": "method",
                  "computed": false,
                  "static": true,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 93,
                  "end": 124
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
                    "start": 136,
                    "end": 144
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
                              "type": "Identifier",
                              "decorators": [],
                              "name": "C",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 156,
                              "end": 157
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "name": "field",
                              "start": 158,
                              "end": 164
                            },
                            "optional": false,
                            "computed": false,
                            "start": 156,
                            "end": 164
                          },
                          "start": 149,
                          "end": 164
                        }
                      ],
                      "start": 147,
                      "end": 166
                    },
                    "expression": false,
                    "start": 144,
                    "end": 166
                  },
                  "kind": "method",
                  "computed": false,
                  "static": true,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 129,
                  "end": 166
                }
              ],
              "start": 18,
              "end": 169
            },
            "abstract": false,
            "declare": false,
            "start": 10,
            "end": 169
          },
          "definite": false,
          "start": 6,
          "end": 169
        }
      ],
      "declare": false,
      "start": 0,
      "end": 169
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
            "start": 171,
            "end": 178
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "log",
            "optional": false,
            "typeAnnotation": null,
            "start": 179,
            "end": 182
          },
          "optional": false,
          "computed": false,
          "start": 171,
          "end": 182
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
                    "start": 183,
                    "end": 184
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getClass",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 185,
                    "end": 193
                  },
                  "optional": false,
                  "computed": false,
                  "start": 183,
                  "end": 193
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 183,
                "end": 195
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "getField",
                "optional": false,
                "typeAnnotation": null,
                "start": 196,
                "end": 204
              },
              "optional": false,
              "computed": false,
              "start": 183,
              "end": 204
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 183,
            "end": 206
          }
        ],
        "optional": false,
        "start": 171,
        "end": 207
      },
      "directive": null,
      "start": 171,
      "end": 208
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
              "start": 209,
              "end": 210
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "getClass",
              "optional": false,
              "typeAnnotation": null,
              "start": 211,
              "end": 219
            },
            "optional": false,
            "computed": false,
            "start": 209,
            "end": 219
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 209,
          "end": 221
        },
        "property": {
          "type": "PrivateIdentifier",
          "name": "method",
          "start": 222,
          "end": 229
        },
        "optional": false,
        "computed": false,
        "start": 209,
        "end": 229
      },
      "directive": null,
      "start": 209,
      "end": 230
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
              "start": 240,
              "end": 241
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "getClass",
              "optional": false,
              "typeAnnotation": null,
              "start": 242,
              "end": 250
            },
            "optional": false,
            "computed": false,
            "start": 240,
            "end": 250
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 240,
          "end": 252
        },
        "property": {
          "type": "PrivateIdentifier",
          "name": "field",
          "start": 253,
          "end": 259
        },
        "optional": false,
        "computed": false,
        "start": 240,
        "end": 259
      },
      "directive": null,
      "start": 240,
      "end": 260
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 270
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
    "type": "Identifier",
    "value": "D",
    "start": 16,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 18,
    "end": 19
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 24,
    "end": 30
  },
  {
    "type": "PrivateIdentifier",
    "value": "field",
    "start": 31,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 38,
    "end": 39
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 40,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 41,
    "end": 42
  },
  {
    "type": "PrivateIdentifier",
    "value": "method",
    "start": 42,
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
    "value": ";",
    "start": 51,
    "end": 52
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 57,
    "end": 63
  },
  {
    "type": "PrivateIdentifier",
    "value": "method",
    "start": 64,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 71,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 72,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 74,
    "end": 75
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 76,
    "end": 82
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 83,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 85,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 87,
    "end": 88
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 93,
    "end": 99
  },
  {
    "type": "Identifier",
    "value": "getClass",
    "start": 100,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 108,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 109,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 111,
    "end": 112
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 113,
    "end": 119
  },
  {
    "type": "Identifier",
    "value": "D",
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
    "type": "Punctuator",
    "value": "}",
    "start": 123,
    "end": 124
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 129,
    "end": 135
  },
  {
    "type": "Identifier",
    "value": "getField",
    "start": 136,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 144,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 145,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 147,
    "end": 148
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 149,
    "end": 155
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 156,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 157,
    "end": 158
  },
  {
    "type": "PrivateIdentifier",
    "value": "field",
    "start": 158,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 165,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 166,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 168,
    "end": 169
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 171,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 178,
    "end": 179
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 179,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 182,
    "end": 183
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 183,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 184,
    "end": 185
  },
  {
    "type": "Identifier",
    "value": "getClass",
    "start": 185,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 193,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 194,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 195,
    "end": 196
  },
  {
    "type": "Identifier",
    "value": "getField",
    "start": 196,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 204,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 205,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 206,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 207,
    "end": 208
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 209,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 210,
    "end": 211
  },
  {
    "type": "Identifier",
    "value": "getClass",
    "start": 211,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 219,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 220,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 221,
    "end": 222
  },
  {
    "type": "PrivateIdentifier",
    "value": "method",
    "start": 222,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 229,
    "end": 230
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 240,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 241,
    "end": 242
  },
  {
    "type": "Identifier",
    "value": "getClass",
    "start": 242,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 250,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 251,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 252,
    "end": 253
  },
  {
    "type": "PrivateIdentifier",
    "value": "field",
    "start": 253,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 259,
    "end": 260
  }
]
```
