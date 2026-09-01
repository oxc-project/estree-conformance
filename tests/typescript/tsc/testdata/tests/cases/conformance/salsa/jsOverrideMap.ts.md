__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "TestMap",
          "optional": false,
          "typeAnnotation": null,
          "start": 75,
          "end": 82
        },
        "typeParameters": null,
        "superClass": {
          "type": "Identifier",
          "decorators": [],
          "name": "Map",
          "optional": false,
          "typeAnnotation": null,
          "start": 91,
          "end": 94
        },
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 95,
          "end": 98
        },
        "abstract": false,
        "declare": false,
        "start": 69,
        "end": 98
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 62,
      "end": 98
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 62,
  "end": 98
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 62,
    "end": 68
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 69,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "TestMap",
    "start": 75,
    "end": 82
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 83,
    "end": 90
  },
  {
    "type": "Identifier",
    "value": "Map",
    "start": 91,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 95,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 97,
    "end": 98
  }
]
```
