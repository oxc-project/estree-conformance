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
            "name": "regex",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 11
          },
          "init": {
            "type": "Literal",
            "value": null,
            "raw": "/\\p{ascii}\\p{Sc=Unknown}\\p{sc=unknownX}\\p{Script_Declensions=Inherited}\\p{scx=inherit}/u",
            "regex": {
              "pattern": "\\p{ascii}\\p{Sc=Unknown}\\p{sc=unknownX}\\p{Script_Declensions=Inherited}\\p{scx=inherit}",
              "flags": "u"
            },
            "start": 14,
            "end": 102
          },
          "definite": false,
          "start": 6,
          "end": 102
        }
      ],
      "declare": false,
      "start": 0,
      "end": 103
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 103
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 0,
    "end": 5
  },
  {
    "type": "Identifier",
    "value": "regex",
    "start": 6,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 12,
    "end": 13
  },
  {
    "type": "RegularExpression",
    "value": "/\\p{ascii}\\p{Sc=Unknown}\\p{sc=unknownX}\\p{Script_Declensions=Inherited}\\p{scx=inherit}/u",
    "regex": {
      "flags": "u",
      "pattern": "\\p{ascii}\\p{Sc=Unknown}\\p{sc=unknownX}\\p{Script_Declensions=Inherited}\\p{scx=inherit}"
    },
    "start": 14,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 102,
    "end": 103
  }
]
```
