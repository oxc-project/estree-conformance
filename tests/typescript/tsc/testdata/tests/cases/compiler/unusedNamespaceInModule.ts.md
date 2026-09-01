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
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 28,
              "end": 29
            },
            "body": {
              "type": "TSModuleBlock",
              "body": [],
              "start": 30,
              "end": 33
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 18,
            "end": 33
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSModuleDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 55,
                "end": 56
              },
              "body": {
                "type": "TSModuleBlock",
                "body": [],
                "start": 57,
                "end": 59
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 45,
              "end": 59
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 38,
            "end": 59
          }
        ],
        "start": 12,
        "end": 61
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 61
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 61
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 0,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 10,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 12,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 18,
    "end": 27
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 28,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 30,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 32,
    "end": 33
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 38,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 45,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 55,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 57,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 58,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 60,
    "end": 61
  }
]
```
