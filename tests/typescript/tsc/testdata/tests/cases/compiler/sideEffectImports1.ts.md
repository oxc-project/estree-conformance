__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [],
      "source": {
        "type": "Literal",
        "value": "does-not-exist",
        "raw": "\"does-not-exist\"",
        "start": 7,
        "end": 23
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 24
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [],
      "source": {
        "type": "Literal",
        "value": "./does-not-exist-either",
        "raw": "\"./does-not-exist-either\"",
        "start": 32,
        "end": 57
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 25,
      "end": 58
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [],
      "source": {
        "type": "Literal",
        "value": "./does-not-exist-either.js",
        "raw": "\"./does-not-exist-either.js\"",
        "start": 66,
        "end": 94
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 59,
      "end": 95
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 95
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
    "type": "String",
    "value": "\"does-not-exist\"",
    "start": 7,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 23,
    "end": 24
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 25,
    "end": 31
  },
  {
    "type": "String",
    "value": "\"./does-not-exist-either\"",
    "start": 32,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 57,
    "end": 58
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 59,
    "end": 65
  },
  {
    "type": "String",
    "value": "\"./does-not-exist-either.js\"",
    "start": 66,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 94,
    "end": 95
  }
]
```
