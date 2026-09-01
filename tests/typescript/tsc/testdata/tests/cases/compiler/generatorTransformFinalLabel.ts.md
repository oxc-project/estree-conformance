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
        "name": "test",
        "optional": false,
        "typeAnnotation": null,
        "start": 15,
        "end": 19
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "skip",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 26,
              "end": 33
            },
            "start": 24,
            "end": 33
          },
          "start": 20,
          "end": 33
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "UnaryExpression",
              "operator": "!",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "skip",
                "optional": false,
                "typeAnnotation": null,
                "start": 46,
                "end": 50
              },
              "prefix": true,
              "start": 45,
              "end": 50
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AwaitExpression",
                    "argument": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 68,
                      "end": 69
                    },
                    "start": 62,
                    "end": 69
                  },
                  "directive": null,
                  "start": 62,
                  "end": 69
                }
              ],
              "start": 52,
              "end": 75
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ThrowStatement",
                  "argument": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Error",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 101,
                      "end": 106
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": "test",
                        "raw": "'test'",
                        "start": 107,
                        "end": 113
                      }
                    ],
                    "optional": false,
                    "start": 101,
                    "end": 114
                  },
                  "start": 95,
                  "end": 114
                }
              ],
              "start": 85,
              "end": 120
            },
            "start": 41,
            "end": 120
          }
        ],
        "start": 35,
        "end": 122
      },
      "expression": false,
      "start": 0,
      "end": 122
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 122
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "async",
    "start": 0,
    "end": 5
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 6,
    "end": 14
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 15,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 19,
    "end": 20
  },
  {
    "type": "Identifier",
    "value": "skip",
    "start": 20,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 24,
    "end": 25
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 26,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 33,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 35,
    "end": 36
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 41,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 44,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 45,
    "end": 46
  },
  {
    "type": "Identifier",
    "value": "skip",
    "start": 46,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 50,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 52,
    "end": 53
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 62,
    "end": 67
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 68,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 74,
    "end": 75
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 80,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 85,
    "end": 86
  },
  {
    "type": "Keyword",
    "value": "throw",
    "start": 95,
    "end": 100
  },
  {
    "type": "Identifier",
    "value": "Error",
    "start": 101,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 106,
    "end": 107
  },
  {
    "type": "String",
    "value": "'test'",
    "start": 107,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 113,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 119,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 121,
    "end": 122
  }
]
```
