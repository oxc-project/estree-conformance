__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 17,
        "end": 20
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 23,
              "end": 26
            },
            "start": 22,
            "end": 26
          },
          "start": 21,
          "end": 26
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 29,
          "end": 32
        },
        "start": 27,
        "end": 32
      },
      "body": null,
      "expression": false,
      "start": 0,
      "end": 33
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 51,
        "end": 54
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 57,
              "end": 60
            },
            "start": 56,
            "end": 60
          },
          "start": 55,
          "end": 60
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 63,
          "end": 66
        },
        "start": 61,
        "end": 66
      },
      "body": null,
      "expression": false,
      "start": 34,
      "end": 67
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Greeter",
        "optional": false,
        "typeAnnotation": null,
        "start": 75,
        "end": 82
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
              "start": 89,
              "end": 100
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
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 107,
                        "end": 110
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
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
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "bar",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 131,
                                    "end": 134
                                  },
                                  "typeArguments": null,
                                  "arguments": [
                                    {
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
                                                  "start": 163,
                                                  "end": 164
                                                },
                                                "init": {
                                                  "type": "ThisExpression",
                                                  "start": 167,
                                                  "end": 171
                                                },
                                                "definite": false,
                                                "start": 163,
                                                "end": 171
                                              }
                                            ],
                                            "declare": false,
                                            "start": 159,
                                            "end": 172
                                          }
                                        ],
                                        "start": 141,
                                        "end": 177
                                      },
                                      "id": null,
                                      "generator": false,
                                      "start": 135,
                                      "end": 177
                                    }
                                  ],
                                  "optional": false,
                                  "start": 131,
                                  "end": 178
                                },
                                "directive": null,
                                "start": 131,
                                "end": 179
                              }
                            ],
                            "start": 117,
                            "end": 183
                          },
                          "id": null,
                          "generator": false,
                          "start": 111,
                          "end": 183
                        }
                      ],
                      "optional": false,
                      "start": 107,
                      "end": 184
                    },
                    "directive": null,
                    "start": 107,
                    "end": 185
                  }
                ],
                "start": 103,
                "end": 188
              },
              "expression": false,
              "start": 100,
              "end": 188
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 89,
            "end": 188
          }
        ],
        "start": 83,
        "end": 191
      },
      "abstract": false,
      "declare": false,
      "start": 69,
      "end": 191
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 192
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 0,
    "end": 7
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 8,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 17,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 20,
    "end": 21
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 21,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 22,
    "end": 23
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 23,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 26,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 27,
    "end": 28
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 29,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 32,
    "end": 33
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 34,
    "end": 41
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 42,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 51,
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
    "value": "a",
    "start": 55,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 56,
    "end": 57
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 57,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 60,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 61,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 63,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 66,
    "end": 67
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 69,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "Greeter",
    "start": 75,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 83,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 89,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 100,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 101,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 103,
    "end": 104
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 107,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 110,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 111,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 112,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 114,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 117,
    "end": 118
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 131,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 134,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 135,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 136,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 138,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 141,
    "end": 142
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 159,
    "end": 162
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 163,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 165,
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
    "value": ";",
    "start": 171,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 176,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 177,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 178,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "start": 187,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 190,
    "end": 191
  }
]
```
