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
            "name": "𝘳𝘦𝘨𝘦𝘹",
            "optional": false,
            "typeAnnotation": null,
            "start": 365,
            "end": 375
          },
          "init": {
            "type": "Literal",
            "value": null,
            "raw": "/(?𝘴𝘪-𝘮:^𝘧𝘰𝘰.)/𝘨𝘮𝘶",
            "regex": {
              "pattern": "(?𝘴𝘪-𝘮:^𝘧𝘰𝘰.)",
              "flags": "𝘨𝘮𝘶"
            },
            "start": 378,
            "end": 405
          },
          "definite": false,
          "start": 365,
          "end": 405
        }
      ],
      "declare": false,
      "start": 359,
      "end": 406
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 359,
  "end": 406
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 359,
    "end": 364
  },
  {
    "type": "Identifier",
    "value": "𝘳𝘦𝘨𝘦𝘹",
    "start": 365,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 376,
    "end": 377
  },
  {
    "type": "RegularExpression",
    "value": "/(?𝘴𝘪-𝘮:^𝘧𝘰𝘰.)/𝘨𝘮𝘶",
    "regex": {
      "flags": "𝘨𝘮𝘶",
      "pattern": "(?𝘴𝘪-𝘮:^𝘧𝘰𝘰.)"
    },
    "start": 378,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 405,
    "end": 406
  }
]
```
