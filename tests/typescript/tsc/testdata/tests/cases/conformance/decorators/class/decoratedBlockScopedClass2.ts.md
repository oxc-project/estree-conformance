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
        "name": "decorator",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 18
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
              "type": "ArrowFunctionExpression",
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "target",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "abstract": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "RestElement",
                          "decorators": [],
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "args",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 51,
                            "end": 55
                          },
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSArrayType",
                              "elementType": {
                                "type": "TSAnyKeyword",
                                "start": 57,
                                "end": 60
                              },
                              "start": 57,
                              "end": 62
                            },
                            "start": 55,
                            "end": 62
                          },
                          "value": null,
                          "start": 48,
                          "end": 62
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 67,
                          "end": 70
                        },
                        "start": 64,
                        "end": 70
                      },
                      "start": 43,
                      "end": 70
                    },
                    "start": 41,
                    "end": 70
                  },
                  "start": 35,
                  "end": 70
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 75,
                "end": 77
              },
              "id": null,
              "generator": false,
              "start": 34,
              "end": 77
            },
            "start": 27,
            "end": 77
          }
        ],
        "start": 21,
        "end": 79
      },
      "expression": false,
      "start": 0,
      "end": 79
    },
    {
      "type": "TryStatement",
      "block": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ClassDeclaration",
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "decorator",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 92,
                    "end": 101
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 92,
                  "end": 103
                },
                "start": 91,
                "end": 103
              }
            ],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 114,
              "end": 117
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
                    "name": "func",
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
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Foo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 150,
                          "end": 153
                        },
                        "typeArguments": null,
                        "start": 150,
                        "end": 153
                      },
                      "start": 148,
                      "end": 153
                    },
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
                              "name": "Foo",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 179,
                              "end": 182
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "start": 175,
                            "end": 184
                          },
                          "start": 168,
                          "end": 185
                        }
                      ],
                      "start": 154,
                      "end": 195
                    },
                    "expression": false,
                    "start": 146,
                    "end": 195
                  },
                  "kind": "method",
                  "computed": false,
                  "static": true,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 128,
                  "end": 195
                }
              ],
              "start": 118,
              "end": 201
            },
            "abstract": false,
            "declare": false,
            "start": 91,
            "end": 201
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
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 206,
                  "end": 209
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "func",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 210,
                  "end": 214
                },
                "optional": false,
                "computed": false,
                "start": 206,
                "end": 214
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 206,
              "end": 216
            },
            "directive": null,
            "start": 206,
            "end": 217
          }
        ],
        "start": 85,
        "end": 219
      },
      "handler": {
        "type": "CatchClause",
        "param": {
          "type": "Identifier",
          "decorators": [],
          "name": "e",
          "optional": false,
          "typeAnnotation": null,
          "start": 227,
          "end": 228
        },
        "body": {
          "type": "BlockStatement",
          "body": [],
          "start": 230,
          "end": 232
        },
        "start": 220,
        "end": 232
      },
      "finalizer": null,
      "start": 81,
      "end": 232
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 232
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 0,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "decorator",
    "start": 9,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 18,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 19,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 21,
    "end": 22
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 27,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 34,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "target",
    "start": 35,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 41,
    "end": 42
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 43,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 48,
    "end": 51
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 51,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 55,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 57,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 60,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 61,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 62,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 64,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 67,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 70,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 72,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 75,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 76,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 78,
    "end": 79
  },
  {
    "type": "Keyword",
    "value": "try",
    "start": 81,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 85,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 91,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "decorator",
    "start": 92,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 101,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 102,
    "end": 103
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 108,
    "end": 113
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 114,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 118,
    "end": 119
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 128,
    "end": 134
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 135,
    "end": 141
  },
  {
    "type": "Identifier",
    "value": "func",
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
    "value": ":",
    "start": 148,
    "end": 149
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 150,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 154,
    "end": 155
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 168,
    "end": 174
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 175,
    "end": 178
  },
  {
    "type": "Identifier",
    "value": "Foo",
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
    "type": "Punctuator",
    "value": "}",
    "start": 194,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 200,
    "end": 201
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 206,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 209,
    "end": 210
  },
  {
    "type": "Identifier",
    "value": "func",
    "start": 210,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 214,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 215,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 216,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 218,
    "end": 219
  },
  {
    "type": "Keyword",
    "value": "catch",
    "start": 220,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 226,
    "end": 227
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 227,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 228,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 230,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 231,
    "end": 232
  }
]
```
