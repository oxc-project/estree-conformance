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
      "start": 61,
      "end": 71
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
            "name": "await",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 93,
                "end": 96
              },
              "start": 91,
              "end": 96
            },
            "start": 86,
            "end": 96
          },
          "init": null,
          "definite": false,
          "start": 86,
          "end": 96
        }
      ],
      "declare": true,
      "start": 72,
      "end": 97
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 112,
        "end": 113
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "await",
        "optional": false,
        "typeAnnotation": null,
        "start": 122,
        "end": 127
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 128,
        "end": 130
      },
      "abstract": false,
      "declare": true,
      "start": 98,
      "end": 130
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 61,
  "end": 130
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 61,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 68,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 69,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 70,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 72,
    "end": 79
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 80,
    "end": 85
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 86,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 91,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 93,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 96,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 98,
    "end": 105
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 106,
    "end": 111
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 112,
    "end": 113
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 114,
    "end": 121
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 122,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 128,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 129,
    "end": 130
  }
]
```
