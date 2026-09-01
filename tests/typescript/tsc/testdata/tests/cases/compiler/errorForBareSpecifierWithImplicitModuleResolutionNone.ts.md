__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "thing",
            "optional": false,
            "typeAnnotation": null,
            "start": 68,
            "end": 73
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "thing",
            "optional": false,
            "typeAnnotation": null,
            "start": 68,
            "end": 73
          },
          "importKind": "value",
          "start": 68,
          "end": 73
        }
      ],
      "source": {
        "type": "Literal",
        "value": "non-existent-module",
        "raw": "\"non-existent-module\"",
        "start": 81,
        "end": 102
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 59,
      "end": 103
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "thing",
          "optional": false,
          "typeAnnotation": null,
          "start": 104,
          "end": 109
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 104,
        "end": 111
      },
      "directive": null,
      "start": 104,
      "end": 111
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 59,
  "end": 111
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 59,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 66,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "thing",
    "start": 68,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 74,
    "end": 75
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 76,
    "end": 80
  },
  {
    "type": "String",
    "value": "\"non-existent-module\"",
    "start": 81,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 102,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "thing",
    "start": 104,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 109,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 110,
    "end": 111
  }
]
```
