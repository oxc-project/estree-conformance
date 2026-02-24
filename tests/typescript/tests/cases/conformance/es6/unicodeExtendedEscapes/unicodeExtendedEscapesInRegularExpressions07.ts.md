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
            "start": 96,
            "end": 97
          },
          "init": {
            "type": "Literal",
            "value": null,
            "raw": "/\\u{110000}/gu",
            "regex": {
              "pattern": "\\u{110000}",
              "flags": "gu"
            },
            "start": 100,
            "end": 114
          },
          "definite": false,
          "start": 96,
          "end": 114
        }
      ],
      "declare": false,
      "start": 92,
      "end": 115
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 92,
  "end": 115
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 92,
    "end": 95
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 96,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 98,
    "end": 99
  },
  {
    "type": "RegularExpression",
    "value": "/\\u{110000}/gu",
    "regex": {
      "flags": "gu",
      "pattern": "\\u{110000}"
    },
    "start": 100,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 114,
    "end": 115
  }
]
```
