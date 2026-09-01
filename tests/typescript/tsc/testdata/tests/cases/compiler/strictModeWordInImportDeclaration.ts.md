__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Literal",
        "value": "use strict",
        "raw": "\"use strict\"",
        "start": 0,
        "end": 12
      },
      "directive": "use strict",
      "start": 0,
      "end": 12
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "package",
            "optional": false,
            "typeAnnotation": null,
            "start": 25,
            "end": 32
          },
          "start": 20,
          "end": 32
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./1",
        "raw": "\"./1\"",
        "start": 38,
        "end": 43
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 13,
      "end": 43
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 52,
            "end": 55
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "private",
            "optional": false,
            "typeAnnotation": null,
            "start": 59,
            "end": 66
          },
          "importKind": "value",
          "start": 52,
          "end": 66
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./1",
        "raw": "\"./1\"",
        "start": 73,
        "end": 78
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 44,
      "end": 78
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "public",
            "optional": false,
            "typeAnnotation": null,
            "start": 86,
            "end": 92
          },
          "start": 86,
          "end": 92
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./1",
        "raw": "\"./1\"",
        "start": 98,
        "end": 103
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 79,
      "end": 103
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 103
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "String",
    "value": "\"use strict\"",
    "start": 0,
    "end": 12
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 13,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 20,
    "end": 21
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 22,
    "end": 24
  },
  {
    "type": "Identifier",
    "value": "package",
    "start": 25,
    "end": 32
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 33,
    "end": 37
  },
  {
    "type": "String",
    "value": "\"./1\"",
    "start": 38,
    "end": 43
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 44,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 51,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 52,
    "end": 55
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 56,
    "end": 58
  },
  {
    "type": "Identifier",
    "value": "private",
    "start": 59,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 66,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 68,
    "end": 72
  },
  {
    "type": "String",
    "value": "\"./1\"",
    "start": 73,
    "end": 78
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 79,
    "end": 85
  },
  {
    "type": "Identifier",
    "value": "public",
    "start": 86,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 93,
    "end": 97
  },
  {
    "type": "String",
    "value": "\"./1\"",
    "start": 98,
    "end": 103
  }
]
```
