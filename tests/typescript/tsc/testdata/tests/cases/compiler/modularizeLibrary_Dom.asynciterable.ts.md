__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "navigator",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 0,
                  "end": 9
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "storage",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 10,
                  "end": 17
                },
                "optional": false,
                "computed": false,
                "start": 0,
                "end": 17
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "getDirectory",
                "optional": false,
                "typeAnnotation": null,
                "start": 18,
                "end": 30
              },
              "optional": false,
              "computed": false,
              "start": 0,
              "end": 30
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 0,
            "end": 32
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "then",
            "optional": false,
            "typeAnnotation": null,
            "start": 33,
            "end": 37
          },
          "optional": false,
          "computed": false,
          "start": 0,
          "end": 37
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": true,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "directory",
                "optional": false,
                "typeAnnotation": null,
                "start": 44,
                "end": 53
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ForOfStatement",
                  "await": true,
                  "left": {
                    "type": "VariableDeclaration",
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "ArrayPattern",
                          "decorators": [],
                          "elements": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "key",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 81,
                              "end": 84
                            },
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "handle",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 86,
                              "end": 92
                            }
                          ],
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 80,
                          "end": 93
                        },
                        "init": null,
                        "definite": false,
                        "start": 80,
                        "end": 93
                      }
                    ],
                    "declare": false,
                    "start": 74,
                    "end": 93
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "directory",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 97,
                    "end": 106
                  },
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "handle",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 118,
                            "end": 124
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "kind",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 125,
                            "end": 129
                          },
                          "optional": false,
                          "computed": false,
                          "start": 118,
                          "end": 129
                        },
                        "directive": null,
                        "start": 118,
                        "end": 130
                      }
                    ],
                    "start": 108,
                    "end": 136
                  },
                  "start": 63,
                  "end": 136
                }
              ],
              "start": 57,
              "end": 138
            },
            "id": null,
            "generator": false,
            "start": 38,
            "end": 138
          }
        ],
        "optional": false,
        "start": 0,
        "end": 139
      },
      "directive": null,
      "start": 0,
      "end": 140
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 140
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "navigator",
    "start": 0,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 9,
    "end": 10
  },
  {
    "type": "Identifier",
    "value": "storage",
    "start": 10,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 17,
    "end": 18
  },
  {
    "type": "Identifier",
    "value": "getDirectory",
    "start": 18,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 30,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 31,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 32,
    "end": 33
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 33,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 37,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 38,
    "end": 43
  },
  {
    "type": "Identifier",
    "value": "directory",
    "start": 44,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 54,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 57,
    "end": 58
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 63,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 67,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 73,
    "end": 74
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 74,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 80,
    "end": 81
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 81,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 84,
    "end": 85
  },
  {
    "type": "Identifier",
    "value": "handle",
    "start": 86,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 92,
    "end": 93
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 94,
    "end": 96
  },
  {
    "type": "Identifier",
    "value": "directory",
    "start": 97,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 106,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 108,
    "end": 109
  },
  {
    "type": "Identifier",
    "value": "handle",
    "start": 118,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 124,
    "end": 125
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 125,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 129,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 135,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 137,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 138,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 139,
    "end": 140
  }
]
```
