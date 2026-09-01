__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
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
            "name": "console",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "log",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 20,
                      "end": 23
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "message",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 33,
                            "end": 36
                          },
                          "start": 31,
                          "end": 36
                        },
                        "start": 24,
                        "end": 36
                      }
                    ],
                    "returnType": null,
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 20,
                    "end": 38
                  }
                ],
                "start": 14,
                "end": 40
              },
              "start": 12,
              "end": 40
            },
            "start": 4,
            "end": 40
          },
          "init": null,
          "definite": false,
          "start": 4,
          "end": 40
        }
      ],
      "declare": false,
      "start": 0,
      "end": 40
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 47,
        "end": 50
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 57,
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
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "_this",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 75,
                          "end": 80
                        },
                        "init": {
                          "type": "Literal",
                          "value": 10,
                          "raw": "10",
                          "start": 83,
                          "end": 85
                        },
                        "definite": false,
                        "start": 75,
                        "end": 85
                      }
                    ],
                    "declare": false,
                    "start": 71,
                    "end": 86
                  },
                  {
                    "type": "FunctionDeclaration",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "inner",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 158,
                      "end": 163
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
                                "start": 180,
                                "end": 187
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "log",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 188,
                                "end": 191
                              },
                              "optional": false,
                              "computed": false,
                              "start": 180,
                              "end": 191
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "_this",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 192,
                                "end": 197
                              }
                            ],
                            "optional": false,
                            "start": 180,
                            "end": 198
                          },
                          "directive": null,
                          "start": 180,
                          "end": 199
                        },
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "ArrowFunctionExpression",
                            "expression": true,
                            "async": false,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 277,
                                "end": 278
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "ThisExpression",
                              "start": 282,
                              "end": 286
                            },
                            "id": null,
                            "generator": false,
                            "start": 277,
                            "end": 286
                          },
                          "start": 270,
                          "end": 287
                        }
                      ],
                      "start": 166,
                      "end": 369
                    },
                    "expression": false,
                    "start": 149,
                    "end": 369
                  }
                ],
                "start": 61,
                "end": 375
              },
              "expression": false,
              "start": 58,
              "end": 375
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 57,
            "end": 375
          }
        ],
        "start": 51,
        "end": 377
      },
      "abstract": false,
      "declare": false,
      "start": 41,
      "end": 377
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 377
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 0,
    "end": 3
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 4,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 12,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 14,
    "end": 15
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 20,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 23,
    "end": 24
  },
  {
    "type": "Identifier",
    "value": "message",
    "start": 24,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 31,
    "end": 32
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 33,
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
    "type": "Punctuator",
    "value": "}",
    "start": 39,
    "end": 40
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 41,
    "end": 46
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 47,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 51,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 57,
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
    "value": "var",
    "start": 71,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "_this",
    "start": 75,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 81,
    "end": 82
  },
  {
    "type": "Numeric",
    "value": "10",
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
    "type": "Keyword",
    "value": "function",
    "start": 149,
    "end": 157
  },
  {
    "type": "Identifier",
    "value": "inner",
    "start": 158,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 163,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 164,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 166,
    "end": 167
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 180,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 187,
    "end": 188
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 188,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 191,
    "end": 192
  },
  {
    "type": "Identifier",
    "value": "_this",
    "start": 192,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 197,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 198,
    "end": 199
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 270,
    "end": 276
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 277,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 279,
    "end": 281
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 282,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 286,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 368,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 374,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 376,
    "end": 377
  }
]
```
