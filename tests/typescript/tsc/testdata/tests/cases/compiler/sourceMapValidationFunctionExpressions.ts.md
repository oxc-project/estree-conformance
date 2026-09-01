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
            "name": "greetings",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 13
          },
          "init": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 16,
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
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "greet",
            "optional": false,
            "typeAnnotation": null,
            "start": 23,
            "end": 28
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "greeting",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 42,
                    "end": 48
                  },
                  "start": 40,
                  "end": 48
                },
                "start": 32,
                "end": 48
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 51,
                "end": 57
              },
              "start": 49,
              "end": 57
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "UpdateExpression",
                    "operator": "++",
                    "prefix": false,
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "greetings",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 67,
                      "end": 76
                    },
                    "start": 67,
                    "end": 78
                  },
                  "directive": null,
                  "start": 67,
                  "end": 79
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "greetings",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 91,
                    "end": 100
                  },
                  "start": 84,
                  "end": 101
                }
              ],
              "start": 61,
              "end": 103
            },
            "id": null,
            "generator": false,
            "start": 31,
            "end": 103
          },
          "definite": false,
          "start": 23,
          "end": 103
        }
      ],
      "declare": false,
      "start": 19,
      "end": 103
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "greet",
          "optional": false,
          "typeAnnotation": null,
          "start": 104,
          "end": 109
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "Hello",
            "raw": "\"Hello\"",
            "start": 110,
            "end": 117
          }
        ],
        "optional": false,
        "start": 104,
        "end": 118
      },
      "directive": null,
      "start": 104,
      "end": 119
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "incrGreetings",
            "optional": false,
            "typeAnnotation": null,
            "start": 124,
            "end": 137
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "UpdateExpression",
              "operator": "++",
              "prefix": false,
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "greetings",
                "optional": false,
                "typeAnnotation": null,
                "start": 146,
                "end": 155
              },
              "start": 146,
              "end": 157
            },
            "id": null,
            "generator": false,
            "start": 140,
            "end": 157
          },
          "definite": false,
          "start": 124,
          "end": 157
        }
      ],
      "declare": false,
      "start": 120,
      "end": 158
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 158
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
    "value": "greetings",
    "start": 4,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 14,
    "end": 15
  },
  {
    "type": "Numeric",
    "value": "0",
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
    "type": "Keyword",
    "value": "var",
    "start": 19,
    "end": 22
  },
  {
    "type": "Identifier",
    "value": "greet",
    "start": 23,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 29,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 31,
    "end": 32
  },
  {
    "type": "Identifier",
    "value": "greeting",
    "start": 32,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 40,
    "end": 41
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 42,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 48,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 49,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 51,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 58,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 61,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "greetings",
    "start": 67,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 76,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 78,
    "end": 79
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 84,
    "end": 90
  },
  {
    "type": "Identifier",
    "value": "greetings",
    "start": 91,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 100,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 102,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "greet",
    "start": 104,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 109,
    "end": 110
  },
  {
    "type": "String",
    "value": "\"Hello\"",
    "start": 110,
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
    "type": "Keyword",
    "value": "var",
    "start": 120,
    "end": 123
  },
  {
    "type": "Identifier",
    "value": "incrGreetings",
    "start": 124,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 138,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 140,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 141,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 143,
    "end": 145
  },
  {
    "type": "Identifier",
    "value": "greetings",
    "start": 146,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 155,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 157,
    "end": 158
  }
]
```
