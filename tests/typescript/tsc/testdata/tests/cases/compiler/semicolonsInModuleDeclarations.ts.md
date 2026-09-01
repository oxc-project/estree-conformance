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
        "name": "ambiModule",
        "optional": false,
        "typeAnnotation": null,
        "start": 18,
        "end": 28
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "i1",
                "optional": false,
                "typeAnnotation": null,
                "start": 51,
                "end": 53
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 54,
                "end": 57
              },
              "declare": false,
              "start": 41,
              "end": 57
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 34,
            "end": 57
          },
          {
            "type": "EmptyStatement",
            "start": 57,
            "end": 58
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
                "start": 79,
                "end": 81
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 82,
                "end": 85
              },
              "declare": false,
              "start": 69,
              "end": 85
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 62,
            "end": 85
          }
        ],
        "start": 29,
        "end": 87
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 87
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "n1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ambiModule",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 97,
                    "end": 107
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "i1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 108,
                    "end": 110
                  },
                  "start": 97,
                  "end": 110
                },
                "typeArguments": null,
                "start": 97,
                "end": 110
              },
              "start": 95,
              "end": 110
            },
            "start": 93,
            "end": 110
          },
          "init": null,
          "definite": false,
          "start": 93,
          "end": 110
        }
      ],
      "declare": false,
      "start": 89,
      "end": 111
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "n2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ambiModule",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 120,
                    "end": 130
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "i2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 131,
                    "end": 133
                  },
                  "start": 120,
                  "end": 133
                },
                "typeArguments": null,
                "start": 120,
                "end": 133
              },
              "start": 118,
              "end": 133
            },
            "start": 116,
            "end": 133
          },
          "init": null,
          "definite": false,
          "start": 116,
          "end": 133
        }
      ],
      "declare": false,
      "start": 112,
      "end": 134
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 134
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
    "value": "ambiModule",
    "start": 18,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 29,
    "end": 30
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 34,
    "end": 40
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 41,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "i1",
    "start": 51,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 54,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 56,
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
    "value": "export",
    "start": 62,
    "end": 68
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 69,
    "end": 78
  },
  {
    "type": "Identifier",
    "value": "i2",
    "start": 79,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 82,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 84,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 86,
    "end": 87
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 89,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "n1",
    "start": 93,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 95,
    "end": 96
  },
  {
    "type": "Identifier",
    "value": "ambiModule",
    "start": 97,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 107,
    "end": 108
  },
  {
    "type": "Identifier",
    "value": "i1",
    "start": 108,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 110,
    "end": 111
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 112,
    "end": 115
  },
  {
    "type": "Identifier",
    "value": "n2",
    "start": 116,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 118,
    "end": 119
  },
  {
    "type": "Identifier",
    "value": "ambiModule",
    "start": 120,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 130,
    "end": 131
  },
  {
    "type": "Identifier",
    "value": "i2",
    "start": 131,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 133,
    "end": 134
  }
]
```
