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
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 74,
            "end": 75
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 79,
                "end": 80
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "id",
                "optional": false,
                "typeAnnotation": null,
                "start": 82,
                "end": 84
              }
            ],
            "returnType": null,
            "body": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "id",
                "optional": false,
                "typeAnnotation": null,
                "start": 89,
                "end": 91
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 92,
                  "end": 93
                }
              ],
              "optional": false,
              "start": 89,
              "end": 94
            },
            "id": null,
            "generator": false,
            "start": 78,
            "end": 94
          },
          "definite": false,
          "start": 74,
          "end": 94
        }
      ],
      "declare": false,
      "start": 70,
      "end": 94
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 70,
  "end": 94
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 70,
    "end": 73
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 74,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 76,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 78,
    "end": 79
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 79,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 80,
    "end": 81
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 82,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 84,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 86,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 89,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 91,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 92,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 93,
    "end": 94
  }
]
```
