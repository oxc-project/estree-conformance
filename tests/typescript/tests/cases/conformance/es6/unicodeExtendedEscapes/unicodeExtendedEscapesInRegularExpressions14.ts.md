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
            "start": 50,
            "end": 51
          },
          "init": {
            "type": "Literal",
            "value": null,
            "raw": "/\\u{-DDDD}/gu",
            "regex": {
              "pattern": "\\u{-DDDD}",
              "flags": "gu"
            },
            "start": 54,
            "end": 67
          },
          "definite": false,
          "start": 50,
          "end": 67
        }
      ],
      "declare": false,
      "start": 46,
      "end": 68
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 46,
  "end": 68
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 46,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 50,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 52,
    "end": 53
  },
  {
    "type": "RegularExpression",
    "value": "/\\u{-DDDD}/gu",
    "regex": {
      "flags": "gu",
      "pattern": "\\u{-DDDD}"
    },
    "start": 54,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 67,
    "end": 68
  }
]
```
