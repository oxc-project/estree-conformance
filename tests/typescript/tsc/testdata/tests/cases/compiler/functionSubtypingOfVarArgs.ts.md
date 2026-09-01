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
        "name": "EventBase",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 15
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
              "name": "_listeners",
              "optional": false,
              "typeAnnotation": null,
              "start": 30,
              "end": 40
            },
            "typeAnnotation": null,
            "value": {
              "type": "ArrayExpression",
              "elements": [],
              "start": 43,
              "end": 45
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 22,
            "end": 46
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "add",
              "optional": false,
              "typeAnnotation": null,
              "start": 52,
              "end": 55
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
                  "name": "listener",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
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
                            "start": 70,
                            "end": 74
                          },
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSArrayType",
                              "elementType": {
                                "type": "TSAnyKeyword",
                                "start": 76,
                                "end": 79
                              },
                              "start": 76,
                              "end": 81
                            },
                            "start": 74,
                            "end": 81
                          },
                          "value": null,
                          "start": 67,
                          "end": 81
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 86,
                          "end": 90
                        },
                        "start": 83,
                        "end": 90
                      },
                      "start": 66,
                      "end": 90
                    },
                    "start": 64,
                    "end": 90
                  },
                  "start": 56,
                  "end": 90
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 93,
                  "end": 97
                },
                "start": 91,
                "end": 97
              },
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
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 108,
                            "end": 112
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "_listeners",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 113,
                            "end": 123
                          },
                          "optional": false,
                          "computed": false,
                          "start": 108,
                          "end": 123
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "push",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 124,
                          "end": 128
                        },
                        "optional": false,
                        "computed": false,
                        "start": 108,
                        "end": 128
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "listener",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 129,
                          "end": 137
                        }
                      ],
                      "optional": false,
                      "start": 108,
                      "end": 138
                    },
                    "directive": null,
                    "start": 108,
                    "end": 139
                  }
                ],
                "start": 98,
                "end": 145
              },
              "expression": false,
              "start": 55,
              "end": 145
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 52,
            "end": 145
          }
        ],
        "start": 16,
        "end": 147
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 147
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "StringEvent",
        "optional": false,
        "typeAnnotation": null,
        "start": 155,
        "end": 166
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "EventBase",
        "optional": false,
        "typeAnnotation": null,
        "start": 175,
        "end": 184
      },
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
              "name": "add",
              "optional": false,
              "typeAnnotation": null,
              "start": 206,
              "end": 209
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
                  "name": "listener",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "items",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 228,
                              "end": 234
                            },
                            "start": 226,
                            "end": 234
                          },
                          "start": 221,
                          "end": 234
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 239,
                          "end": 243
                        },
                        "start": 236,
                        "end": 243
                      },
                      "start": 220,
                      "end": 243
                    },
                    "start": 218,
                    "end": 243
                  },
                  "start": 210,
                  "end": 243
                }
              ],
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
                          "type": "Super",
                          "start": 291,
                          "end": 296
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "add",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 297,
                          "end": 300
                        },
                        "optional": false,
                        "computed": false,
                        "start": 291,
                        "end": 300
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "listener",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 301,
                          "end": 309
                        }
                      ],
                      "optional": false,
                      "start": 291,
                      "end": 310
                    },
                    "directive": null,
                    "start": 291,
                    "end": 311
                  }
                ],
                "start": 246,
                "end": 317
              },
              "expression": false,
              "start": 209,
              "end": 317
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 206,
            "end": 317
          }
        ],
        "start": 185,
        "end": 319
      },
      "abstract": false,
      "declare": false,
      "start": 149,
      "end": 319
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 319
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
    "value": "EventBase",
    "start": 6,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 16,
    "end": 17
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 22,
    "end": 29
  },
  {
    "type": "Identifier",
    "value": "_listeners",
    "start": 30,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 41,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 43,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "type": "Identifier",
    "value": "add",
    "start": 52,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 55,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "listener",
    "start": 56,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 64,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 66,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 67,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 70,
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
    "value": "any",
    "start": 76,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 79,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "value": "=>",
    "start": 83,
    "end": 85
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 86,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 90,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 91,
    "end": 92
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 93,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 98,
    "end": 99
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 108,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 112,
    "end": 113
  },
  {
    "type": "Identifier",
    "value": "_listeners",
    "start": 113,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 123,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "push",
    "start": 124,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 128,
    "end": 129
  },
  {
    "type": "Identifier",
    "value": "listener",
    "start": 129,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 137,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 138,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 144,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 146,
    "end": 147
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 149,
    "end": 154
  },
  {
    "type": "Identifier",
    "value": "StringEvent",
    "start": 155,
    "end": 166
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 167,
    "end": 174
  },
  {
    "type": "Identifier",
    "value": "EventBase",
    "start": 175,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 185,
    "end": 186
  },
  {
    "type": "Identifier",
    "value": "add",
    "start": 206,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 209,
    "end": 210
  },
  {
    "type": "Identifier",
    "value": "listener",
    "start": 210,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 218,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 220,
    "end": 221
  },
  {
    "type": "Identifier",
    "value": "items",
    "start": 221,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 226,
    "end": 227
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 228,
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
    "value": "=>",
    "start": 236,
    "end": 238
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 239,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 244,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 246,
    "end": 247
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 291,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 296,
    "end": 297
  },
  {
    "type": "Identifier",
    "value": "add",
    "start": 297,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 300,
    "end": 301
  },
  {
    "type": "Identifier",
    "value": "listener",
    "start": 301,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 309,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 310,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 316,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 318,
    "end": 319
  }
]
```
