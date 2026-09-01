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
            "name": "default",
            "optional": false,
            "typeAnnotation": null,
            "start": 8,
            "end": 15
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 19,
            "end": 20
          },
          "importKind": "value",
          "start": 8,
          "end": 20
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "default",
            "optional": false,
            "typeAnnotation": null,
            "start": 22,
            "end": 29
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 33,
            "end": 34
          },
          "importKind": "value",
          "start": 22,
          "end": 34
        }
      ],
      "source": {
        "type": "Literal",
        "value": "m",
        "raw": "\"m\"",
        "start": 41,
        "end": 44
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 45
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 51,
          "end": 52
        },
        "prefix": true,
        "start": 46,
        "end": 52
      },
      "directive": null,
      "start": 46,
      "end": 53
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 59,
          "end": 60
        },
        "prefix": true,
        "start": 54,
        "end": 60
      },
      "directive": null,
      "start": 54,
      "end": 61
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 61
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 0,
    "end": 6
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "default",
    "start": 8,
    "end": 15
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 16,
    "end": 18
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 19,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 20,
    "end": 21
  },
  {
    "type": "Identifier",
    "value": "default",
    "start": 22,
    "end": 29
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 30,
    "end": 32
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 33,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 34,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 36,
    "end": 40
  },
  {
    "type": "String",
    "value": "\"m\"",
    "start": 41,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 44,
    "end": 45
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 46,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 51,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 52,
    "end": 53
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 54,
    "end": 58
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 59,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 60,
    "end": 61
  }
]
```
