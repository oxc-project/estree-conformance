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
            "start": 115,
            "end": 116
          },
          "init": {
            "type": "Literal",
            "value": null,
            "raw": "/\\u{10000}/gu",
            "regex": {
              "pattern": "\\u{10000}",
              "flags": "gu"
            },
            "start": 119,
            "end": 132
          },
          "definite": false,
          "start": 115,
          "end": 132
        }
      ],
      "declare": false,
      "start": 111,
      "end": 133
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 111,
  "end": 133
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 111,
    "end": 114
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 115,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 117,
    "end": 118
  },
  {
    "type": "RegularExpression",
    "value": "/\\u{10000}/gu",
    "regex": {
      "flags": "gu",
      "pattern": "\\u{10000}"
    },
    "start": 119,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 132,
    "end": 133
  }
]
```
