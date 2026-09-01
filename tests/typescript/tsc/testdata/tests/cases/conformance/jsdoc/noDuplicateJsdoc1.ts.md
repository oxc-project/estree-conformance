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
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 17,
            "end": 18
          },
          "init": {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 21,
              "end": 22
            },
            "right": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 31,
                "end": 32
              },
              "id": null,
              "generator": false,
              "start": 25,
              "end": 32
            },
            "start": 21,
            "end": 32
          },
          "definite": false,
          "start": 17,
          "end": 32
        }
      ],
      "declare": false,
      "start": 11,
      "end": 33
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 11,
  "end": 33
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 11,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 17,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 19,
    "end": 20
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 21,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 23,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 25,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 26,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 28,
    "end": 30
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 31,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 32,
    "end": 33
  }
]
```
