__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 114,
            "end": 115
          },
          "init": {
            "type": "Literal",
            "value": null,
            "raw": "/\\u{FFFF}/gu",
            "regex": {
              "pattern": "\\u{FFFF}",
              "flags": "gu"
            },
            "start": 118,
            "end": 130
          },
          "definite": false,
          "start": 114,
          "end": 130
        }
      ],
      "declare": false,
      "start": 110,
      "end": 131
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 110,
  "end": 131
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 110,
    "end": 113
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 114,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 116,
    "end": 117
  },
  {
    "type": "RegularExpression",
    "value": "/\\u{FFFF}/gu",
    "regex": {
      "flags": "gu",
      "pattern": "\\u{FFFF}"
    },
    "start": 118,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 130,
    "end": 131
  }
]
```
