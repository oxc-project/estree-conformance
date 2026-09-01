__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "moment",
            "optional": false,
            "typeAnnotation": null,
            "start": 24,
            "end": 30
          },
          "start": 19,
          "end": 30
        }
      ],
      "source": {
        "type": "Literal",
        "value": "moment",
        "raw": "'moment'",
        "start": 36,
        "end": 44
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 12,
      "end": 45
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "rollupMoment__default",
            "optional": false,
            "typeAnnotation": null,
            "start": 53,
            "end": 74
          },
          "start": 53,
          "end": 74
        }
      ],
      "source": {
        "type": "Literal",
        "value": "moment",
        "raw": "'moment'",
        "start": 80,
        "end": 88
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 46,
      "end": 89
    },
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
              "name": "moment",
              "optional": false,
              "typeAnnotation": null,
              "start": 103,
              "end": 109
            },
            "init": {
              "type": "LogicalExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "rollupMoment__default",
                "optional": false,
                "typeAnnotation": null,
                "start": 112,
                "end": 133
              },
              "operator": "||",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "moment",
                "optional": false,
                "typeAnnotation": null,
                "start": 137,
                "end": 143
              },
              "start": 112,
              "end": 143
            },
            "definite": false,
            "start": 103,
            "end": 143
          }
        ],
        "declare": false,
        "start": 97,
        "end": 144
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 90,
      "end": 144
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 12,
  "end": 144
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 12,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 19,
    "end": 20
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 21,
    "end": 23
  },
  {
    "type": "Identifier",
    "value": "moment",
    "start": 24,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 31,
    "end": 35
  },
  {
    "type": "String",
    "value": "'moment'",
    "start": 36,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 44,
    "end": 45
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 46,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "rollupMoment__default",
    "start": 53,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 75,
    "end": 79
  },
  {
    "type": "String",
    "value": "'moment'",
    "start": 80,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 88,
    "end": 89
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 90,
    "end": 96
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 97,
    "end": 102
  },
  {
    "type": "Identifier",
    "value": "moment",
    "start": 103,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 110,
    "end": 111
  },
  {
    "type": "Identifier",
    "value": "rollupMoment__default",
    "start": 112,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 134,
    "end": 136
  },
  {
    "type": "Identifier",
    "value": "moment",
    "start": 137,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 143,
    "end": 144
  }
]
```
