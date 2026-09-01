__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "IfStatement",
      "test": {
        "type": "Literal",
        "value": true,
        "raw": "true",
        "start": 61,
        "end": 65
      },
      "consequent": {
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
                "name": "cssExports",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "CssExports",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 92,
                      "end": 102
                    },
                    "typeArguments": null,
                    "start": 92,
                    "end": 102
                  },
                  "start": 90,
                  "end": 102
                },
                "start": 80,
                "end": 102
              },
              "init": null,
              "definite": false,
              "start": 80,
              "end": 102
            }
          ],
          "declare": false,
          "start": 74,
          "end": 103
        },
        "specifiers": [],
        "source": null,
        "exportKind": "value",
        "attributes": [],
        "start": 67,
        "end": 103
      },
      "alternate": null,
      "start": 57,
      "end": 103
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "Identifier",
        "decorators": [],
        "name": "cssExports",
        "optional": false,
        "typeAnnotation": null,
        "start": 119,
        "end": 129
      },
      "exportKind": "value",
      "start": 104,
      "end": 130
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 57,
  "end": 130
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "if",
    "start": 57,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 60,
    "end": 61
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 61,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 65,
    "end": 66
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 67,
    "end": 73
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 74,
    "end": 79
  },
  {
    "type": "Identifier",
    "value": "cssExports",
    "start": 80,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 90,
    "end": 91
  },
  {
    "type": "Identifier",
    "value": "CssExports",
    "start": 92,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 102,
    "end": 103
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 104,
    "end": 110
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 111,
    "end": 118
  },
  {
    "type": "Identifier",
    "value": "cssExports",
    "start": 119,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 129,
    "end": 130
  }
]
```
