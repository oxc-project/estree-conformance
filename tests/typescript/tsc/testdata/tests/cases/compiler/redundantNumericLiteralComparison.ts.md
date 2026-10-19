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
        "name": "shouldRetry",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 20
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "retryCount",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 33,
              "end": 39
            },
            "start": 31,
            "end": 39
          },
          "start": 21,
          "end": 39
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "currentCount",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 55,
              "end": 61
            },
            "start": 53,
            "end": 61
          },
          "start": 41,
          "end": 61
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "LogicalExpression",
              "left": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "retryCount",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 76,
                  "end": 86
                },
                "operator": "===",
                "right": {
                  "type": "UnaryExpression",
                  "operator": "-",
                  "argument": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 92,
                    "end": 93
                  },
                  "prefix": true,
                  "start": 91,
                  "end": 93
                },
                "start": 76,
                "end": 93
              },
              "operator": "||",
              "right": {
                "type": "LogicalExpression",
                "left": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "retryCount",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 98,
                    "end": 108
                  },
                  "operator": "!==",
                  "right": {
                    "type": "UnaryExpression",
                    "operator": "-",
                    "argument": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 114,
                      "end": 115
                    },
                    "prefix": true,
                    "start": 113,
                    "end": 115
                  },
                  "start": 98,
                  "end": 115
                },
                "operator": "&&",
                "right": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "currentCount",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 119,
                    "end": 131
                  },
                  "operator": "<=",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "retryCount",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 135,
                    "end": 145
                  },
                  "start": 119,
                  "end": 145
                },
                "start": 98,
                "end": 145
              },
              "start": 76,
              "end": 146
            },
            "start": 69,
            "end": 147
          }
        ],
        "start": 63,
        "end": 149
      },
      "expression": false,
      "start": 0,
      "end": 149
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 149
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 0,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "shouldRetry",
    "start": 9,
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
    "value": "retryCount",
    "start": 21,
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
    "value": "number",
    "start": 33,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 39,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "currentCount",
    "start": 41,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 53,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 55,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 61,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 63,
    "end": 64
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 69,
    "end": 75
  },
  {
    "type": "Identifier",
    "value": "retryCount",
    "start": 76,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 87,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 91,
    "end": 92
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 92,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 94,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 97,
    "end": 98
  },
  {
    "type": "Identifier",
    "value": "retryCount",
    "start": 98,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 109,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 113,
    "end": 114
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 114,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 116,
    "end": 118
  },
  {
    "type": "Identifier",
    "value": "currentCount",
    "start": 119,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": "<=",
    "start": 132,
    "end": 134
  },
  {
    "type": "Identifier",
    "value": "retryCount",
    "start": 135,
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
    "value": ";",
    "start": 146,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 148,
    "end": 149
  }
]
```
