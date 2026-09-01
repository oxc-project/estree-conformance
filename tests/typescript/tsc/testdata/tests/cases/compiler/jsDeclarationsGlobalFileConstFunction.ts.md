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
            "name": "SomeConstructor",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 21
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
                        "start": 39,
                        "end": 43
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 44,
                        "end": 45
                      },
                      "optional": false,
                      "computed": false,
                      "start": 39,
                      "end": 45
                    },
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 48,
                      "end": 49
                    },
                    "start": 39,
                    "end": 49
                  },
                  "directive": null,
                  "start": 39,
                  "end": 50
                }
              ],
              "start": 36,
              "end": 52
            },
            "expression": false,
            "start": 24,
            "end": 52
          },
          "definite": false,
          "start": 6,
          "end": 52
        }
      ],
      "declare": false,
      "start": 0,
      "end": 53
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "SomeConstructor2",
            "optional": false,
            "typeAnnotation": null,
            "start": 61,
            "end": 77
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
              "start": 92,
              "end": 95
            },
            "expression": false,
            "start": 80,
            "end": 95
          },
          "definite": false,
          "start": 61,
          "end": 95
        }
      ],
      "declare": false,
      "start": 55,
      "end": 96
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
            "name": "SomeConstructor2",
            "optional": false,
            "typeAnnotation": null,
            "start": 97,
            "end": 113
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "staticMember",
            "optional": false,
            "typeAnnotation": null,
            "start": 114,
            "end": 126
          },
          "optional": false,
          "computed": false,
          "start": 97,
          "end": 126
        },
        "right": {
          "type": "Literal",
          "value": "str",
          "raw": "\"str\"",
          "start": 129,
          "end": 134
        },
        "start": 97,
        "end": 134
      },
      "directive": null,
      "start": 97,
      "end": 135
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "SomeConstructor3",
            "optional": false,
            "typeAnnotation": null,
            "start": 143,
            "end": 159
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
                        "start": 177,
                        "end": 181
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 182,
                        "end": 183
                      },
                      "optional": false,
                      "computed": false,
                      "start": 177,
                      "end": 183
                    },
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 186,
                      "end": 187
                    },
                    "start": 177,
                    "end": 187
                  },
                  "directive": null,
                  "start": 177,
                  "end": 188
                }
              ],
              "start": 174,
              "end": 190
            },
            "expression": false,
            "start": 162,
            "end": 190
          },
          "definite": false,
          "start": 143,
          "end": 190
        }
      ],
      "declare": false,
      "start": 137,
      "end": 191
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
            "name": "SomeConstructor3",
            "optional": false,
            "typeAnnotation": null,
            "start": 192,
            "end": 208
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "staticMember",
            "optional": false,
            "typeAnnotation": null,
            "start": 209,
            "end": 221
          },
          "optional": false,
          "computed": false,
          "start": 192,
          "end": 221
        },
        "right": {
          "type": "Literal",
          "value": "str",
          "raw": "\"str\"",
          "start": 224,
          "end": 229
        },
        "start": 192,
        "end": 229
      },
      "directive": null,
      "start": 192,
      "end": 230
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 230
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
    "value": "SomeConstructor",
    "start": 6,
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
    "value": "function",
    "start": 24,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 33,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 34,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 36,
    "end": 37
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 39,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 43,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 44,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 46,
    "end": 47
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 48,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 49,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 51,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 52,
    "end": 53
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 55,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "SomeConstructor2",
    "start": 61,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 78,
    "end": 79
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 80,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 89,
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
    "value": "{",
    "start": 92,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 94,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 95,
    "end": 96
  },
  {
    "type": "Identifier",
    "value": "SomeConstructor2",
    "start": 97,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 113,
    "end": 114
  },
  {
    "type": "Identifier",
    "value": "staticMember",
    "start": 114,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 127,
    "end": 128
  },
  {
    "type": "String",
    "value": "\"str\"",
    "start": 129,
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
    "value": "const",
    "start": 137,
    "end": 142
  },
  {
    "type": "Identifier",
    "value": "SomeConstructor3",
    "start": 143,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 160,
    "end": 161
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 162,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 171,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 172,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 174,
    "end": 175
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 177,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 181,
    "end": 182
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 182,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 184,
    "end": 185
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 186,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 187,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 189,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 190,
    "end": 191
  },
  {
    "type": "Identifier",
    "value": "SomeConstructor3",
    "start": 192,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 208,
    "end": 209
  },
  {
    "type": "Identifier",
    "value": "staticMember",
    "start": 209,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 222,
    "end": 223
  },
  {
    "type": "String",
    "value": "\"str\"",
    "start": 224,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 229,
    "end": 230
  }
]
```
