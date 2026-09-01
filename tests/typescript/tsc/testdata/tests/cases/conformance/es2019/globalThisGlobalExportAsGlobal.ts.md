__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "global",
        "optional": false,
        "typeAnnotation": null,
        "start": 64,
        "end": 70
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": null,
            "specifiers": [
              {
                "type": "ExportSpecifier",
                "local": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "globalThis",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 86,
                  "end": 96
                },
                "exported": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "global",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 100,
                  "end": 106
                },
                "exportKind": "value",
                "start": 86,
                "end": 106
              }
            ],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 77,
            "end": 108
          }
        ],
        "start": 71,
        "end": 110
      },
      "kind": "global",
      "declare": true,
      "global": true,
      "start": 56,
      "end": 110
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 56,
  "end": 110
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 56,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "global",
    "start": 64,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 71,
    "end": 72
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 77,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 84,
    "end": 85
  },
  {
    "type": "Identifier",
    "value": "globalThis",
    "start": 86,
    "end": 96
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 97,
    "end": 99
  },
  {
    "type": "Identifier",
    "value": "global",
    "start": 100,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 107,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 109,
    "end": 110
  }
]
```
