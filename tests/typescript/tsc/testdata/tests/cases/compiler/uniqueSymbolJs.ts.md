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
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 35,
            "end": 38
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null,
              "start": 41,
              "end": 47
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 41,
            "end": 49
          },
          "definite": false,
          "start": 35,
          "end": 49
        }
      ],
      "declare": false,
      "start": 29,
      "end": 50
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 29,
  "end": 133
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 29,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 35,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 39,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 41,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 47,
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
    "value": ";",
    "start": 49,
    "end": 50
  }
]
```
