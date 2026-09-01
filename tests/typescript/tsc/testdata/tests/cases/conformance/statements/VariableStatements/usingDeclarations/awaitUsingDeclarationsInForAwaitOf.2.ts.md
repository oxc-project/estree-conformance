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
        "start": 72,
        "end": 76
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ForOfStatement",
            "await": true,
            "left": {
              "type": "VariableDeclaration",
              "kind": "await using",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "of",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 106,
                    "end": 108
                  },
                  "init": null,
                  "definite": false,
                  "start": 106,
                  "end": 108
                }
              ],
              "declare": false,
              "start": 94,
              "end": 108
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "of",
              "optional": false,
              "typeAnnotation": null,
              "start": 112,
              "end": 114
            },
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 116,
              "end": 118
            },
            "start": 83,
            "end": 118
          },
          {
            "type": "EmptyStatement",
            "start": 118,
            "end": 119
          }
        ],
        "start": 79,
        "end": 121
      },
      "expression": false,
      "start": 57,
      "end": 121
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 57,
  "end": 121
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "async",
    "start": 57,
    "end": 62
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 63,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 72,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 76,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 77,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 79,
    "end": 80
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 83,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 87,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 93,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 94,
    "end": 99
  },
  {
    "type": "Identifier",
    "value": "using",
    "start": 100,
    "end": 105
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 106,
    "end": 108
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 109,
    "end": 111
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 112,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 114,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 116,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "type": "Punctuator",
    "value": "}",
    "start": 120,
    "end": 121
  }
]
```
