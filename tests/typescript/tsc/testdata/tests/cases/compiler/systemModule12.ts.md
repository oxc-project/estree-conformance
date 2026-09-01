__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null,
            "start": 43,
            "end": 44
          },
          "start": 43,
          "end": 44
        }
      ],
      "source": {
        "type": "Literal",
        "value": "file1",
        "raw": "'file1'",
        "start": 50,
        "end": 57
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 36,
      "end": 57
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 36,
  "end": 57
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 36,
    "end": 42
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 43,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 45,
    "end": 49
  },
  {
    "type": "String",
    "value": "'file1'",
    "start": 50,
    "end": 57
  }
]
```
