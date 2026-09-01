__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "WhileStatement",
      "test": {
        "type": "Literal",
        "value": true,
        "raw": "true",
        "start": 63,
        "end": 67
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "local",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 79,
                  "end": 84
                },
                "init": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 87,
                  "end": 91
                },
                "definite": false,
                "start": 79,
                "end": 91
              }
            ],
            "declare": false,
            "start": 75,
            "end": 92
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 101,
                  "end": 102
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "local",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 111,
                    "end": 116
                  },
                  "id": null,
                  "generator": false,
                  "start": 105,
                  "end": 116
                },
                "definite": false,
                "start": 101,
                "end": 116
              }
            ],
            "declare": false,
            "start": 97,
            "end": 117
          }
        ],
        "start": 69,
        "end": 167
      },
      "start": 56,
      "end": 167
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 56,
  "end": 167
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "while",
    "start": 56,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 62,
    "end": 63
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 63,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 67,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 69,
    "end": 70
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 75,
    "end": 78
  },
  {
    "type": "Identifier",
    "value": "local",
    "start": 79,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 85,
    "end": 86
  },
  {
    "type": "Null",
    "value": "null",
    "start": 87,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 91,
    "end": 92
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 97,
    "end": 100
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 101,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 103,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 105,
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
    "value": "=>",
    "start": 108,
    "end": 110
  },
  {
    "type": "Identifier",
    "value": "local",
    "start": 111,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 116,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 166,
    "end": 167
  }
]
```
