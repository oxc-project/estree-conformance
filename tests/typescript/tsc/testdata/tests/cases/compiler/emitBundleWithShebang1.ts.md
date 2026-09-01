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
        "name": "Doo",
        "optional": false,
        "typeAnnotation": null,
        "start": 25,
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
      "start": 19,
      "end": 31
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Scooby",
        "optional": false,
        "typeAnnotation": null,
        "start": 38,
        "end": 44
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Doo",
        "optional": false,
        "typeAnnotation": null,
        "start": 53,
        "end": 56
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 57,
        "end": 59
      },
      "abstract": false,
      "declare": false,
      "start": 32,
      "end": 59
    }
  ],
  "sourceType": "script",
  "hashbang": {
    "type": "Hashbang",
    "value": "/usr/bin/env gjs",
    "start": 0,
    "end": 18
  },
  "start": 19,
  "end": 59
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 19,
    "end": 24
  },
  {
    "type": "Identifier",
    "value": "Doo",
    "start": 25,
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
    "value": "class",
    "start": 32,
    "end": 37
  },
  {
    "type": "Identifier",
    "value": "Scooby",
    "start": 38,
    "end": 44
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 45,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "Doo",
    "start": 53,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 57,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 58,
    "end": 59
  }
]
```
