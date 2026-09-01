__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ArrowFunctionExpression",
        "expression": true,
        "async": false,
        "typeParameters": null,
        "params": [],
        "returnType": null,
        "body": {
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
                "type": "ForInStatement",
                "left": {
                  "type": "VariableDeclaration",
                  "kind": "let",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "someKey",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 89,
                        "end": 96
                      },
                      "init": null,
                      "definite": false,
                      "start": 89,
                      "end": 96
                    }
                  ],
                  "declare": false,
                  "start": 85,
                  "end": 96
                },
                "right": {
                  "type": "ObjectExpression",
                  "properties": [],
                  "start": 100,
                  "end": 102
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
                            "type": "ThisExpression",
                            "start": 114,
                            "end": 118
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "helloWorld",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 119,
                            "end": 129
                          },
                          "optional": false,
                          "computed": false,
                          "start": 114,
                          "end": 129
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 114,
                        "end": 131
                      },
                      "directive": null,
                      "start": 114,
                      "end": 132
                    },
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "ArrowFunctionExpression",
                        "expression": true,
                        "async": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "someKey",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 147,
                          "end": 154
                        },
                        "id": null,
                        "generator": false,
                        "start": 141,
                        "end": 154
                      },
                      "directive": null,
                      "start": 141,
                      "end": 155
                    }
                  ],
                  "start": 104,
                  "end": 161
                },
                "start": 80,
                "end": 161
              }
            ],
            "start": 74,
            "end": 163
          },
          "expression": false,
          "start": 62,
          "end": 163
        },
        "id": null,
        "generator": false,
        "start": 56,
        "end": 163
      },
      "directive": null,
      "start": 56,
      "end": 164
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 56,
  "end": 164
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Punctuator",
    "value": "(",
    "start": 56,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 57,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 59,
    "end": 61
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 62,
    "end": 70
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
    "value": "for",
    "start": 80,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 84,
    "end": 85
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 85,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "someKey",
    "start": 89,
    "end": 96
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 97,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 100,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "type": "Punctuator",
    "value": "{",
    "start": 104,
    "end": 105
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 114,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 118,
    "end": 119
  },
  {
    "type": "Identifier",
    "value": "helloWorld",
    "start": 119,
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
    "value": ";",
    "start": 131,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 141,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 142,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 144,
    "end": 146
  },
  {
    "type": "Identifier",
    "value": "someKey",
    "start": 147,
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
    "start": 160,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 162,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 163,
    "end": 164
  }
]
```
