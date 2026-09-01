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
            "name": "fns",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 9
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [],
            "start": 12,
            "end": 14
          },
          "definite": false,
          "start": 6,
          "end": 14
        }
      ],
      "declare": false,
      "start": 0,
      "end": 15
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 27,
              "end": 32
            },
            "init": null,
            "definite": false,
            "start": 27,
            "end": 32
          }
        ],
        "declare": false,
        "start": 21,
        "end": 32
      },
      "right": {
        "type": "ArrayExpression",
        "elements": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 37,
            "end": 38
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 40,
            "end": 41
          },
          {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 43,
            "end": 44
          }
        ],
        "start": 36,
        "end": 45
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fns",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 53,
                  "end": 56
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 57,
                  "end": 61
                },
                "optional": false,
                "computed": false,
                "start": 53,
                "end": 61
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 71,
                          "end": 76
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 71,
                          "end": 76
                        },
                        "method": false,
                        "shorthand": true,
                        "computed": false,
                        "optional": false,
                        "start": 71,
                        "end": 76
                      }
                    ],
                    "start": 69,
                    "end": 78
                  },
                  "id": null,
                  "generator": false,
                  "start": 62,
                  "end": 79
                }
              ],
              "optional": false,
              "start": 53,
              "end": 80
            },
            "directive": null,
            "start": 53,
            "end": 81
          }
        ],
        "start": 47,
        "end": 83
      },
      "start": 16,
      "end": 83
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
            "name": "result",
            "optional": false,
            "typeAnnotation": null,
            "start": 90,
            "end": 96
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "fns",
                "optional": false,
                "typeAnnotation": null,
                "start": 99,
                "end": 102
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "map",
                "optional": false,
                "typeAnnotation": null,
                "start": 103,
                "end": 106
              },
              "optional": false,
              "computed": false,
              "start": 99,
              "end": 106
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "fn",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 107,
                    "end": 109
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "fn",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 113,
                    "end": 115
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 113,
                  "end": 117
                },
                "id": null,
                "generator": false,
                "start": 107,
                "end": 117
              }
            ],
            "optional": false,
            "start": 99,
            "end": 118
          },
          "definite": false,
          "start": 90,
          "end": 118
        }
      ],
      "declare": false,
      "start": 84,
      "end": 119
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
            "start": 120,
            "end": 127
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "log",
            "optional": false,
            "typeAnnotation": null,
            "start": 128,
            "end": 131
          },
          "optional": false,
          "computed": false,
          "start": 120,
          "end": 131
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "result",
            "optional": false,
            "typeAnnotation": null,
            "start": 132,
            "end": 138
          }
        ],
        "optional": false,
        "start": 120,
        "end": 139
      },
      "directive": null,
      "start": 120,
      "end": 139
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 139
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
    "value": "fns",
    "start": 6,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 10,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 12,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 13,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 14,
    "end": 15
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 16,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 20,
    "end": 21
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 21,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 27,
    "end": 32
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 33,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 36,
    "end": 37
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 38,
    "end": 39
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 40,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 41,
    "end": 42
  },
  {
    "type": "Numeric",
    "value": "3",
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
    "value": ")",
    "start": 45,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 47,
    "end": 48
  },
  {
    "type": "Identifier",
    "value": "fns",
    "start": 53,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 56,
    "end": 57
  },
  {
    "type": "Identifier",
    "value": "push",
    "start": 57,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 61,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 62,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 63,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 65,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 68,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 69,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 71,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 77,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 78,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 79,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 80,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 82,
    "end": 83
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 84,
    "end": 89
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 90,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 97,
    "end": 98
  },
  {
    "type": "Identifier",
    "value": "fns",
    "start": 99,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 102,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 103,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 106,
    "end": 107
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 107,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 110,
    "end": 112
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 113,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 115,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 116,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 117,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 118,
    "end": 119
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 120,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 127,
    "end": 128
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 128,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 131,
    "end": 132
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 132,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 138,
    "end": 139
  }
]
```
