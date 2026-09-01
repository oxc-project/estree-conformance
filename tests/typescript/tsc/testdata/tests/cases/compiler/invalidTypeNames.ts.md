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
        "name": "illegal_name_here",
        "optional": false,
        "typeAnnotation": null,
        "start": 71,
        "end": 88
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 89,
        "end": 92
      },
      "abstract": false,
      "declare": false,
      "start": 65,
      "end": 92
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 65,
  "end": 92
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 65,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "illegal_name_here",
    "start": 71,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 89,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 91,
    "end": 92
  }
]
```
