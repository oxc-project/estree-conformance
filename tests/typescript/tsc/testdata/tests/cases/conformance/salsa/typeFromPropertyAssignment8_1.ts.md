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
            "name": "my",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 6
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "my",
              "optional": false,
              "typeAnnotation": null,
              "start": 9,
              "end": 11
            },
            "operator": "??",
            "right": {
              "type": "ObjectExpression",
              "properties": [],
              "start": 15,
              "end": 17
            },
            "start": 9,
            "end": 17
          },
          "definite": false,
          "start": 4,
          "end": 17
        }
      ],
      "declare": false,
      "start": 0,
      "end": 18
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
            "name": "my",
            "optional": false,
            "typeAnnotation": null,
            "start": 19,
            "end": 21
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "app",
            "optional": false,
            "typeAnnotation": null,
            "start": 22,
            "end": 25
          },
          "optional": false,
          "computed": false,
          "start": 19,
          "end": 25
        },
        "right": {
          "type": "LogicalExpression",
          "left": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "my",
              "optional": false,
              "typeAnnotation": null,
              "start": 28,
              "end": 30
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "app",
              "optional": false,
              "typeAnnotation": null,
              "start": 31,
              "end": 34
            },
            "optional": false,
            "computed": false,
            "start": 28,
            "end": 34
          },
          "operator": "??",
          "right": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 38,
            "end": 40
          },
          "start": 28,
          "end": 40
        },
        "start": 19,
        "end": 40
      },
      "directive": null,
      "start": 19,
      "end": 41
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "my",
              "optional": false,
              "typeAnnotation": null,
              "start": 43,
              "end": 45
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "app",
              "optional": false,
              "typeAnnotation": null,
              "start": 46,
              "end": 49
            },
            "optional": false,
            "computed": false,
            "start": 43,
            "end": 49
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "Application",
            "optional": false,
            "typeAnnotation": null,
            "start": 50,
            "end": 61
          },
          "optional": false,
          "computed": false,
          "start": 43,
          "end": 61
        },
        "right": {
          "type": "CallExpression",
          "callee": {
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
                        "name": "Application",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 83,
                        "end": 94
                      },
                      "init": {
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
                          "body": [],
                          "start": 109,
                          "end": 122
                        },
                        "expression": false,
                        "start": 97,
                        "end": 122
                      },
                      "definite": false,
                      "start": 83,
                      "end": 122
                    }
                  ],
                  "declare": false,
                  "start": 79,
                  "end": 123
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Application",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 131,
                    "end": 142
                  },
                  "start": 124,
                  "end": 143
                }
              ],
              "start": 77,
              "end": 145
            },
            "expression": false,
            "start": 65,
            "end": 145
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 64,
          "end": 148
        },
        "start": 43,
        "end": 148
      },
      "directive": null,
      "start": 43,
      "end": 149
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
              "type": "Identifier",
              "decorators": [],
              "name": "my",
              "optional": false,
              "typeAnnotation": null,
              "start": 150,
              "end": 152
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "app",
              "optional": false,
              "typeAnnotation": null,
              "start": 153,
              "end": 156
            },
            "optional": false,
            "computed": false,
            "start": 150,
            "end": 156
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "Application",
            "optional": false,
            "typeAnnotation": null,
            "start": 157,
            "end": 168
          },
          "optional": false,
          "computed": false,
          "start": 150,
          "end": 168
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 150,
        "end": 170
      },
      "directive": null,
      "start": 150,
      "end": 170
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 171
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
    "value": "my",
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
    "type": "Identifier",
    "value": "my",
    "start": 9,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "??",
    "start": 12,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 15,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 16,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 17,
    "end": 18
  },
  {
    "type": "Identifier",
    "value": "my",
    "start": 19,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 21,
    "end": 22
  },
  {
    "type": "Identifier",
    "value": "app",
    "start": 22,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 26,
    "end": 27
  },
  {
    "type": "Identifier",
    "value": "my",
    "start": 28,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 30,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "app",
    "start": 31,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": "??",
    "start": 35,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 39,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 40,
    "end": 41
  },
  {
    "type": "Identifier",
    "value": "my",
    "start": 43,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 45,
    "end": 46
  },
  {
    "type": "Identifier",
    "value": "app",
    "start": 46,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 49,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "Application",
    "start": 50,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 62,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 64,
    "end": 65
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 65,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 74,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 75,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 77,
    "end": 78
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 79,
    "end": 82
  },
  {
    "type": "Identifier",
    "value": "Application",
    "start": 83,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 95,
    "end": 96
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 97,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 106,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 107,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 109,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 121,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 122,
    "end": 123
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 124,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "Application",
    "start": 131,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 142,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "value": ";",
    "start": 148,
    "end": 149
  },
  {
    "type": "Identifier",
    "value": "my",
    "start": 150,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 152,
    "end": 153
  },
  {
    "type": "Identifier",
    "value": "app",
    "start": 153,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 156,
    "end": 157
  },
  {
    "type": "Identifier",
    "value": "Application",
    "start": 157,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 168,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 169,
    "end": 170
  }
]
```
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
            "name": "min",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 7
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "window",
                "optional": false,
                "typeAnnotation": null,
                "start": 10,
                "end": 16
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "min",
                "optional": false,
                "typeAnnotation": null,
                "start": 17,
                "end": 20
              },
              "optional": false,
              "computed": false,
              "start": 10,
              "end": 20
            },
            "operator": "??",
            "right": {
              "type": "ObjectExpression",
              "properties": [],
              "start": 24,
              "end": 26
            },
            "start": 10,
            "end": 26
          },
          "definite": false,
          "start": 4,
          "end": 26
        }
      ],
      "declare": false,
      "start": 0,
      "end": 27
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
            "name": "min",
            "optional": false,
            "typeAnnotation": null,
            "start": 28,
            "end": 31
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "app",
            "optional": false,
            "typeAnnotation": null,
            "start": 32,
            "end": 35
          },
          "optional": false,
          "computed": false,
          "start": 28,
          "end": 35
        },
        "right": {
          "type": "LogicalExpression",
          "left": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "min",
              "optional": false,
              "typeAnnotation": null,
              "start": 38,
              "end": 41
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "app",
              "optional": false,
              "typeAnnotation": null,
              "start": 42,
              "end": 45
            },
            "optional": false,
            "computed": false,
            "start": 38,
            "end": 45
          },
          "operator": "??",
          "right": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 49,
            "end": 51
          },
          "start": 38,
          "end": 51
        },
        "start": 28,
        "end": 51
      },
      "directive": null,
      "start": 28,
      "end": 52
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "min",
              "optional": false,
              "typeAnnotation": null,
              "start": 54,
              "end": 57
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "app",
              "optional": false,
              "typeAnnotation": null,
              "start": 58,
              "end": 61
            },
            "optional": false,
            "computed": false,
            "start": 54,
            "end": 61
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "Application",
            "optional": false,
            "typeAnnotation": null,
            "start": 62,
            "end": 73
          },
          "optional": false,
          "computed": false,
          "start": 54,
          "end": 73
        },
        "right": {
          "type": "CallExpression",
          "callee": {
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
                        "name": "Application",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 95,
                        "end": 106
                      },
                      "init": {
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
                          "body": [],
                          "start": 121,
                          "end": 134
                        },
                        "expression": false,
                        "start": 109,
                        "end": 134
                      },
                      "definite": false,
                      "start": 95,
                      "end": 134
                    }
                  ],
                  "declare": false,
                  "start": 91,
                  "end": 135
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Application",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 143,
                    "end": 154
                  },
                  "start": 136,
                  "end": 155
                }
              ],
              "start": 89,
              "end": 157
            },
            "expression": false,
            "start": 77,
            "end": 157
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 76,
          "end": 160
        },
        "start": 54,
        "end": 160
      },
      "directive": null,
      "start": 54,
      "end": 161
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
              "type": "Identifier",
              "decorators": [],
              "name": "min",
              "optional": false,
              "typeAnnotation": null,
              "start": 162,
              "end": 165
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "app",
              "optional": false,
              "typeAnnotation": null,
              "start": 166,
              "end": 169
            },
            "optional": false,
            "computed": false,
            "start": 162,
            "end": 169
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "Application",
            "optional": false,
            "typeAnnotation": null,
            "start": 170,
            "end": 181
          },
          "optional": false,
          "computed": false,
          "start": 162,
          "end": 181
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 162,
        "end": 183
      },
      "directive": null,
      "start": 162,
      "end": 183
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 183
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
    "value": "min",
    "start": 4,
    "end": 7
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "window",
    "start": 10,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 16,
    "end": 17
  },
  {
    "type": "Identifier",
    "value": "min",
    "start": 17,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": "??",
    "start": 21,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 24,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 25,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 26,
    "end": 27
  },
  {
    "type": "Identifier",
    "value": "min",
    "start": 28,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 31,
    "end": 32
  },
  {
    "type": "Identifier",
    "value": "app",
    "start": 32,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 36,
    "end": 37
  },
  {
    "type": "Identifier",
    "value": "min",
    "start": 38,
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
    "value": "app",
    "start": 42,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": "??",
    "start": 46,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 49,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "type": "Identifier",
    "value": "min",
    "start": 54,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 57,
    "end": 58
  },
  {
    "type": "Identifier",
    "value": "app",
    "start": 58,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 61,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "Application",
    "start": 62,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 74,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 76,
    "end": 77
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 77,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 86,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 87,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 89,
    "end": 90
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 91,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "Application",
    "start": 95,
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
    "value": "function",
    "start": 109,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 118,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 119,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 121,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 133,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 134,
    "end": 135
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 136,
    "end": 142
  },
  {
    "type": "Identifier",
    "value": "Application",
    "start": 143,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 154,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 156,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 157,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 158,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 159,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 160,
    "end": 161
  },
  {
    "type": "Identifier",
    "value": "min",
    "start": 162,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 165,
    "end": 166
  },
  {
    "type": "Identifier",
    "value": "app",
    "start": 166,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 169,
    "end": 170
  },
  {
    "type": "Identifier",
    "value": "Application",
    "start": 170,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 181,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 182,
    "end": 183
  }
]
```
