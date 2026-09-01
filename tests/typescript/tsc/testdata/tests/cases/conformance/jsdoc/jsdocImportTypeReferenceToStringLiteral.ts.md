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
              "name": "FOO",
              "optional": false,
              "typeAnnotation": null,
              "start": 13,
              "end": 16
            },
            "init": {
              "type": "Literal",
              "value": "foo",
              "raw": "\"foo\"",
              "start": 19,
              "end": 24
            },
            "definite": false,
            "start": 13,
            "end": 24
          }
        ],
        "declare": false,
        "start": 7,
        "end": 25
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 25
    }
  ],
  "sourceType": "module",
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
    "value": "export",
    "start": 0,
    "end": 6
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 7,
    "end": 12
  },
  {
    "type": "Identifier",
    "value": "FOO",
    "start": 13,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 17,
    "end": 18
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 19,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 24,
    "end": 25
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
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
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 37,
            "end": 38
          },
          "init": null,
          "definite": false,
          "start": 37,
          "end": 38
        }
      ],
      "declare": false,
      "start": 33,
      "end": 39
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 33,
  "end": 39
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "let",
    "start": 33,
    "end": 36
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 38,
    "end": 39
  }
]
```
