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
        "name": "My",
        "optional": false,
        "typeAnnotation": null,
        "start": 112,
        "end": 114
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Set",
        "optional": false,
        "typeAnnotation": null,
        "start": 123,
        "end": 126
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 127,
        "end": 129
      },
      "abstract": false,
      "declare": false,
      "start": 106,
      "end": 129
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 106,
  "end": 129
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 106,
    "end": 111
  },
  {
    "type": "Identifier",
    "value": "My",
    "start": 112,
    "end": 114
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 115,
    "end": 122
  },
  {
    "type": "Identifier",
    "value": "Set",
    "start": 123,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 127,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 128,
    "end": 129
  }
]
```
