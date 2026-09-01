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
              "name": "box",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 75,
                  "end": 81
                },
                "start": 73,
                "end": 81
              },
              "start": 70,
              "end": 81
            },
            "init": null,
            "definite": false,
            "start": 70,
            "end": 81
          }
        ],
        "declare": false,
        "start": 64,
        "end": 81
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 57,
      "end": 81
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "subTitle",
        "optional": false,
        "typeAnnotation": null,
        "start": 82,
        "end": 90
      },
      "body": {
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
                "name": "title",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 112,
                    "end": 118
                  },
                  "start": 110,
                  "end": 118
                },
                "start": 105,
                "end": 118
              },
              "init": null,
              "definite": false,
              "start": 105,
              "end": 118
            }
          ],
          "declare": false,
          "start": 99,
          "end": 118
        },
        "specifiers": [],
        "source": null,
        "exportKind": "value",
        "attributes": [],
        "start": 92,
        "end": 118
      },
      "start": 82,
      "end": 118
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 57,
  "end": 118
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 57,
    "end": 63
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 64,
    "end": 69
  },
  {
    "type": "Identifier",
    "value": "box",
    "start": 70,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 73,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 75,
    "end": 81
  },
  {
    "type": "Identifier",
    "value": "subTitle",
    "start": 82,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 90,
    "end": 91
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 92,
    "end": 98
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 99,
    "end": 104
  },
  {
    "type": "Identifier",
    "value": "title",
    "start": 105,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 110,
    "end": 111
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 112,
    "end": 118
  }
]
```
