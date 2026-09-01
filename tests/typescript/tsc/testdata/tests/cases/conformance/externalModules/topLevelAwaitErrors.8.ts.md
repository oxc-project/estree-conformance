__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "await",
            "optional": false,
            "typeAnnotation": null,
            "start": 45,
            "end": 50
          },
          "start": 45,
          "end": 50
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./other",
        "raw": "\"./other\"",
        "start": 56,
        "end": 65
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 38,
      "end": 66
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 38,
  "end": 67
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 38,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 45,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 51,
    "end": 55
  },
  {
    "type": "String",
    "value": "\"./other\"",
    "start": 56,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 65,
    "end": 66
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "_await",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 22,
                "end": 25
              },
              "start": 20,
              "end": 25
            },
            "start": 14,
            "end": 25
          },
          "init": null,
          "definite": false,
          "start": 14,
          "end": 25
        }
      ],
      "declare": true,
      "start": 0,
      "end": 26
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "Identifier",
        "decorators": [],
        "name": "_await",
        "optional": false,
        "typeAnnotation": null,
        "start": 42,
        "end": 48
      },
      "exportKind": "value",
      "start": 27,
      "end": 49
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 49
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
    "type": "Keyword",
    "value": "const",
    "start": 8,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "_await",
    "start": 14,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 20,
    "end": 21
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 22,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 25,
    "end": 26
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 27,
    "end": 33
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 34,
    "end": 41
  },
  {
    "type": "Identifier",
    "value": "_await",
    "start": 42,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 48,
    "end": 49
  }
]
```
