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
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "mi_string",
              "optional": false,
              "typeAnnotation": null,
              "start": 39,
              "end": 48
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 49,
              "end": 52
            },
            "declare": false,
            "start": 29,
            "end": 52
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "mi_string",
              "optional": false,
              "typeAnnotation": null,
              "start": 67,
              "end": 76
            },
            "body": {
              "type": "TSModuleBlock",
              "body": [],
              "start": 77,
              "end": 80
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 57,
            "end": 80
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "string",
              "optional": false,
              "typeAnnotation": null,
              "start": 197,
              "end": 203
            },
            "moduleReference": {
              "type": "Identifier",
              "decorators": [],
              "name": "mi_string",
              "optional": false,
              "typeAnnotation": null,
              "start": 206,
              "end": 215
            },
            "importKind": "value",
            "start": 190,
            "end": 216
          }
        ],
        "start": 23,
        "end": 218
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 218
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 218
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
    "type": "Keyword",
    "value": "interface",
    "start": 29,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "mi_string",
    "start": 39,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 49,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 51,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 57,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "mi_string",
    "start": 67,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 77,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 79,
    "end": 80
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 190,
    "end": 196
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 197,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 204,
    "end": 205
  },
  {
    "type": "Identifier",
    "value": "mi_string",
    "start": 206,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 215,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 217,
    "end": 218
  }
]
```
