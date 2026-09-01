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
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 69,
        "end": 72
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "𝑚",
          "optional": false,
          "typeAnnotation": null,
          "start": 73,
          "end": 75
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "𝑀",
          "optional": false,
          "typeAnnotation": null,
          "start": 77,
          "end": 79
        }
      ],
      "returnType": null,
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
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 87,
                  "end": 94
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 95,
                  "end": 98
                },
                "optional": false,
                "computed": false,
                "start": 87,
                "end": 98
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "𝑀",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 99,
                    "end": 101
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "𝑚",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 104,
                    "end": 106
                  },
                  "start": 99,
                  "end": 106
                }
              ],
              "optional": false,
              "start": 87,
              "end": 107
            },
            "directive": null,
            "start": 87,
            "end": 108
          }
        ],
        "start": 81,
        "end": 110
      },
      "expression": false,
      "start": 60,
      "end": 110
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 60,
  "end": 110
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 60,
    "end": 68
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 69,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 72,
    "end": 73
  },
  {
    "type": "Identifier",
    "value": "𝑚",
    "start": 73,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 75,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "𝑀",
    "start": 77,
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
    "value": "{",
    "start": 81,
    "end": 82
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 87,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 94,
    "end": 95
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 95,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 98,
    "end": 99
  },
  {
    "type": "Identifier",
    "value": "𝑀",
    "start": 99,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 102,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "𝑚",
    "start": 104,
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
    "value": ";",
    "start": 107,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 109,
    "end": 110
  }
]
```
