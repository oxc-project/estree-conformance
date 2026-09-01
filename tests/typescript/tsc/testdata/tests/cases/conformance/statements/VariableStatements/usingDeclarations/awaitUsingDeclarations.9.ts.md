__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "BlockStatement",
      "body": [
        {
          "type": "VariableDeclaration",
          "kind": "await using",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 18,
                "end": 19
              },
              "init": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 22,
                "end": 26
              },
              "definite": false,
              "start": 18,
              "end": 26
            }
          ],
          "declare": false,
          "start": 6,
          "end": 27
        }
      ],
      "start": 0,
      "end": 29
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 31,
      "end": 41
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 41
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Punctuator",
    "value": "{",
    "start": 0,
    "end": 1
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 6,
    "end": 11
  },
  {
    "type": "Identifier",
    "value": "using",
    "start": 12,
    "end": 17
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 18,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 20,
    "end": 21
  },
  {
    "type": "Null",
    "value": "null",
    "start": 22,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 26,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 28,
    "end": 29
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 31,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 39,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 40,
    "end": 41
  }
]
```
