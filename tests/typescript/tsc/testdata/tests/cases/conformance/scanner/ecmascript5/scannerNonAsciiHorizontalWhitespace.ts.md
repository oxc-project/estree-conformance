__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Literal",
        "value": "  function f() {}",
        "raw": "\"  function f() {}\"",
        "start": 46,
        "end": 65
      },
      "directive": "  function f() {}",
      "start": 46,
      "end": 65
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Literal",
        "value": "  function f() {}",
        "raw": "\"  function f() {}\"",
        "start": 113,
        "end": 132
      },
      "directive": "  function f() {}",
      "start": 113,
      "end": 132
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 46,
  "end": 133
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "String",
    "value": "\"  function f() {}\"",
    "start": 46,
    "end": 65
  },
  {
    "type": "String",
    "value": "\"  function f() {}\"",
    "start": 113,
    "end": 132
  }
]
```
