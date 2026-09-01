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
        "name": "selfReferencingFile2",
        "optional": false,
        "typeAnnotation": null,
        "start": 57,
        "end": 77
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 78,
        "end": 82
      },
      "abstract": false,
      "declare": false,
      "start": 51,
      "end": 82
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 51,
  "end": 82
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 51,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "selfReferencingFile2",
    "start": 57,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 78,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 81,
    "end": 82
  }
]
```
