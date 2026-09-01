__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 27,
        "end": 28
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 29,
        "end": 31
      },
      "abstract": false,
      "declare": false,
      "start": 21,
      "end": 31
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "el",
              "optional": false,
              "typeAnnotation": null,
              "start": 91,
              "end": 93
            },
            "init": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 96,
              "end": 100
            },
            "definite": false,
            "start": 91,
            "end": 100
          }
        ],
        "declare": false,
        "start": 87,
        "end": 101
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 80,
      "end": 101
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 118,
        "end": 119
      },
      "exportKind": "value",
      "start": 103,
      "end": 120
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 21,
  "end": 120
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 21,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 27,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 29,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 30,
    "end": 31
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 80,
    "end": 86
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 87,
    "end": 90
  },
  {
    "type": "Identifier",
    "value": "el",
    "start": 91,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 94,
    "end": 95
  },
  {
    "type": "Null",
    "value": "null",
    "start": 96,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 100,
    "end": 101
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 103,
    "end": 109
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 110,
    "end": 117
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 118,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 119,
    "end": 120
  }
]
```
