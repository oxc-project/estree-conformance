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
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 7
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
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 16,
              "end": 25
            },
            "id": null,
            "generator": false,
            "start": 10,
            "end": 25
          },
          "definite": false,
          "start": 4,
          "end": 25
        }
      ],
      "declare": false,
      "start": 0,
      "end": 26
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 26
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
    "value": "foo",
    "start": 4,
    "end": 7
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 10,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 11,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 13,
    "end": 15
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 16,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 25,
    "end": 26
  }
]
```
