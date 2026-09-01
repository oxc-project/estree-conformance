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
        "name": "Validation",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 20
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i1",
              "optional": false,
              "typeAnnotation": null,
              "start": 37,
              "end": 39
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 40,
              "end": 48
            },
            "declare": false,
            "start": 27,
            "end": 48
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "i2",
                "optional": false,
                "typeAnnotation": null,
                "start": 71,
                "end": 73
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 74,
                "end": 82
              },
              "declare": false,
              "start": 61,
              "end": 82
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 54,
            "end": 82
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i3",
              "optional": false,
              "typeAnnotation": null,
              "start": 98,
              "end": 100
            },
            "typeParameters": null,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "i1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 109,
                  "end": 111
                },
                "typeArguments": null,
                "start": 109,
                "end": 111
              }
            ],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 112,
              "end": 120
            },
            "declare": false,
            "start": 88,
            "end": 120
          }
        ],
        "start": 21,
        "end": 122
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 122
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 122
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
    "value": "Validation",
    "start": 10,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 21,
    "end": 22
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 27,
    "end": 36
  },
  {
    "type": "Identifier",
    "value": "i1",
    "start": 37,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 40,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 47,
    "end": 48
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 54,
    "end": 60
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 61,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "i2",
    "start": 71,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 74,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 81,
    "end": 82
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 88,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "i3",
    "start": 98,
    "end": 100
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 101,
    "end": 108
  },
  {
    "type": "Identifier",
    "value": "i1",
    "start": 109,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 112,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 119,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 121,
    "end": 122
  }
]
```
