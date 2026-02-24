__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Literal",
        "value": null,
        "raw": "/(#?-?\\d*\\.\\d\\w*%?)|(@?#?[\\w-?]+%?)/g",
        "regex": {
          "pattern": "(#?-?\\d*\\.\\d\\w*%?)|(@?#?[\\w-?]+%?)",
          "flags": "g"
        },
        "start": 0,
        "end": 37
      },
      "directive": null,
      "start": 0,
      "end": 38
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 38
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "RegularExpression",
    "value": "/(#?-?\\d*\\.\\d\\w*%?)|(@?#?[\\w-?]+%?)/g",
    "regex": {
      "flags": "g",
      "pattern": "(#?-?\\d*\\.\\d\\w*%?)|(@?#?[\\w-?]+%?)"
    },
    "start": 0,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 37,
    "end": 38
  }
]
```
