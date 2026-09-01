__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 485,
              "end": 486
            },
            "init": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 489,
              "end": 490
            },
            "definite": false,
            "start": 485,
            "end": 490
          }
        ],
        "declare": false,
        "start": 479,
        "end": 491
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 472,
      "end": 491
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 472,
  "end": 491
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 472,
    "end": 478
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 479,
    "end": 484
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 485,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 487,
    "end": 488
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 489,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 490,
    "end": 491
  }
]
```
