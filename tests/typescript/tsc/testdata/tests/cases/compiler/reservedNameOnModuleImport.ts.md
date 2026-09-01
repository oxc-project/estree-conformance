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
        "name": "test",
        "optional": false,
        "typeAnnotation": null,
        "start": 18,
        "end": 22
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "mstring",
              "optional": false,
              "typeAnnotation": null,
              "start": 39,
              "end": 46
            },
            "body": {
              "type": "TSModuleBlock",
              "body": [],
              "start": 47,
              "end": 50
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 29,
            "end": 50
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSImportEqualsDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "string",
                "optional": false,
                "typeAnnotation": null,
                "start": 136,
                "end": 142
              },
              "moduleReference": {
                "type": "Identifier",
                "decorators": [],
                "name": "mstring",
                "optional": false,
                "typeAnnotation": null,
                "start": 145,
                "end": 152
              },
              "importKind": "value",
              "start": 129,
              "end": 153
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 122,
            "end": 153
          }
        ],
        "start": 23,
        "end": 155
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 155
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 155
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 0,
    "end": 7
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 8,
    "end": 17
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 18,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 23,
    "end": 24
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 29,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "mstring",
    "start": 39,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 49,
    "end": 50
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 122,
    "end": 128
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 129,
    "end": 135
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 136,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 143,
    "end": 144
  },
  {
    "type": "Identifier",
    "value": "mstring",
    "start": 145,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 152,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 154,
    "end": 155
  }
]
```
