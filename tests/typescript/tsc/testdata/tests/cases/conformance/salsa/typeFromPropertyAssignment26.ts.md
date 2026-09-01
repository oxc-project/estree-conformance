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
            "name": "UI",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 6
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 9,
            "end": 11
          },
          "definite": false,
          "start": 4,
          "end": 11
        }
      ],
      "declare": false,
      "start": 0,
      "end": 11
    },
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
            "name": "UI",
            "optional": false,
            "typeAnnotation": null,
            "start": 12,
            "end": 14
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "TreeElement",
            "optional": false,
            "typeAnnotation": null,
            "start": 15,
            "end": 26
          },
          "optional": false,
          "computed": false,
          "start": 12,
          "end": 26
        },
        "right": {
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
                "type": "MethodDefinition",
                "decorators": [],
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "constructor",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 41,
                  "end": 52
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
                              "type": "ThisExpression",
                              "start": 65,
                              "end": 69
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "treeOutline",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 70,
                              "end": 81
                            },
                            "optional": false,
                            "computed": false,
                            "start": 65,
                            "end": 81
                          },
                          "right": {
                            "type": "Literal",
                            "value": 12,
                            "raw": "12",
                            "start": 84,
                            "end": 86
                          },
                          "start": 65,
                          "end": 86
                        },
                        "directive": null,
                        "start": 65,
                        "end": 86
                      }
                    ],
                    "start": 55,
                    "end": 92
                  },
                  "expression": false,
                  "start": 52,
                  "end": 92
                },
                "kind": "constructor",
                "computed": false,
                "static": false,
                "override": false,
                "optional": false,
                "accessibility": null,
                "start": 41,
                "end": 92
              }
            ],
            "start": 35,
            "end": 94
          },
          "abstract": false,
          "declare": false,
          "start": 29,
          "end": 94
        },
        "start": 12,
        "end": 94
      },
      "directive": null,
      "start": 12,
      "end": 95
    },
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
            "name": "UI",
            "optional": false,
            "typeAnnotation": null,
            "start": 96,
            "end": 98
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "context",
            "optional": false,
            "typeAnnotation": null,
            "start": 99,
            "end": 106
          },
          "optional": false,
          "computed": false,
          "start": 96,
          "end": 106
        },
        "right": {
          "type": "NewExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "UI",
              "optional": false,
              "typeAnnotation": null,
              "start": 113,
              "end": 115
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "TreeElement",
              "optional": false,
              "typeAnnotation": null,
              "start": 116,
              "end": 127
            },
            "optional": false,
            "computed": false,
            "start": 113,
            "end": 127
          },
          "typeArguments": null,
          "arguments": [],
          "start": 109,
          "end": 129
        },
        "start": 96,
        "end": 129
      },
      "directive": null,
      "start": 96,
      "end": 129
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
        "start": 137,
        "end": 138
      },
      "typeParameters": null,
      "superClass": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "UI",
          "optional": false,
          "typeAnnotation": null,
          "start": 147,
          "end": 149
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "TreeElement",
          "optional": false,
          "typeAnnotation": null,
          "start": 150,
          "end": 161
        },
        "optional": false,
        "computed": false,
        "start": 147,
        "end": 161
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
              "name": "onpopulate",
              "optional": false,
              "typeAnnotation": null,
              "start": 168,
              "end": 178
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
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 191,
                        "end": 195
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "doesNotExist",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 196,
                        "end": 208
                      },
                      "optional": false,
                      "computed": false,
                      "start": 191,
                      "end": 208
                    },
                    "directive": null,
                    "start": 191,
                    "end": 208
                  },
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
                            "start": 217,
                            "end": 221
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "treeOutline",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 222,
                            "end": 233
                          },
                          "optional": false,
                          "computed": false,
                          "start": 217,
                          "end": 233
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "doesntExistEither",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 234,
                          "end": 251
                        },
                        "optional": false,
                        "computed": false,
                        "start": 217,
                        "end": 251
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 217,
                      "end": 253
                    },
                    "directive": null,
                    "start": 217,
                    "end": 253
                  }
                ],
                "start": 181,
                "end": 259
              },
              "expression": false,
              "start": 178,
              "end": 259
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 168,
            "end": 259
          }
        ],
        "start": 162,
        "end": 261
      },
      "abstract": false,
      "declare": false,
      "start": 131,
      "end": 261
    },
    {
      "type": "EmptyStatement",
      "start": 261,
      "end": 262
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 262
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
    "value": "UI",
    "start": 4,
    "end": 6
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7,
    "end": 8
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 9,
    "end": 10
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 10,
    "end": 11
  },
  {
    "type": "Identifier",
    "value": "UI",
    "start": 12,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 14,
    "end": 15
  },
  {
    "type": "Identifier",
    "value": "TreeElement",
    "start": 15,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 27,
    "end": 28
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 29,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 35,
    "end": 36
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 41,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 52,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 53,
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
    "value": "this",
    "start": 65,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 69,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "treeOutline",
    "start": 70,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 82,
    "end": 83
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 84,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 91,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 93,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 94,
    "end": 95
  },
  {
    "type": "Identifier",
    "value": "UI",
    "start": 96,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 98,
    "end": 99
  },
  {
    "type": "Identifier",
    "value": "context",
    "start": 99,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 107,
    "end": 108
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 109,
    "end": 112
  },
  {
    "type": "Identifier",
    "value": "UI",
    "start": 113,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 115,
    "end": 116
  },
  {
    "type": "Identifier",
    "value": "TreeElement",
    "start": 116,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 127,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 128,
    "end": 129
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 131,
    "end": 136
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 137,
    "end": 138
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 139,
    "end": 146
  },
  {
    "type": "Identifier",
    "value": "UI",
    "start": 147,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 149,
    "end": 150
  },
  {
    "type": "Identifier",
    "value": "TreeElement",
    "start": 150,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 162,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "onpopulate",
    "start": 168,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 178,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 179,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 181,
    "end": 182
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 191,
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
    "value": "doesNotExist",
    "start": 196,
    "end": 208
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 217,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 221,
    "end": 222
  },
  {
    "type": "Identifier",
    "value": "treeOutline",
    "start": 222,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 233,
    "end": 234
  },
  {
    "type": "Identifier",
    "value": "doesntExistEither",
    "start": 234,
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
    "value": "}",
    "start": 258,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 260,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 261,
    "end": 262
  }
]
```
