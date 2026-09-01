__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "elem",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "HTMLElement",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 71,
                    "end": 82
                  },
                  "typeArguments": null,
                  "start": 71,
                  "end": 82
                },
                "start": 69,
                "end": 82
              },
              "start": 65,
              "end": 82
            },
            "init": null,
            "definite": false,
            "start": 65,
            "end": 82
          }
        ],
        "declare": true,
        "start": 51,
        "end": 83
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 44,
      "end": 83
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 44,
  "end": 84
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 44,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 51,
    "end": 58
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 59,
    "end": 64
  },
  {
    "type": "Identifier",
    "value": "elem",
    "start": 65,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 69,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "HTMLElement",
    "start": 71,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 82,
    "end": 83
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 44,
      "end": 53
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "elem",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "HTMLElement",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 74,
                  "end": 85
                },
                "typeArguments": null,
                "start": 74,
                "end": 85
              },
              "start": 72,
              "end": 85
            },
            "start": 68,
            "end": 85
          },
          "init": null,
          "definite": false,
          "start": 68,
          "end": 85
        }
      ],
      "declare": true,
      "start": 54,
      "end": 86
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 44,
  "end": 86
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
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
    "type": "Punctuator",
    "value": "}",
    "start": 52,
    "end": 53
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 54,
    "end": 61
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 62,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "elem",
    "start": 68,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 72,
    "end": 73
  },
  {
    "type": "Identifier",
    "value": "HTMLElement",
    "start": 74,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 85,
    "end": 86
  }
]
```
