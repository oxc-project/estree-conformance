__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "IfStatement",
      "test": {
        "type": "Identifier",
        "decorators": [],
        "name": "a",
        "optional": false,
        "typeAnnotation": null,
        "start": 4,
        "end": 5
      },
      "consequent": {
        "type": "ExpressionStatement",
        "expression": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Literal",
              "value": null,
              "raw": "/ (\\\\ ? | & ) rct = j /",
              "regex": {
                "pattern": " (\\\\ ? | & ) rct = j ",
                "flags": ""
              },
              "start": 7,
              "end": 30
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null,
              "start": 32,
              "end": 36
            },
            "optional": false,
            "computed": false,
            "start": 7,
            "end": 36
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 37,
                "end": 38
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "href",
                "optional": false,
                "typeAnnotation": null,
                "start": 39,
                "end": 43
              },
              "optional": false,
              "computed": false,
              "start": 37,
              "end": 43
            }
          ],
          "optional": false,
          "start": 7,
          "end": 44
        },
        "directive": null,
        "start": 7,
        "end": 45
      },
      "alternate": null,
      "start": 0,
      "end": 45
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 45
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "if",
    "start": 0,
    "end": 2
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3,
    "end": 4
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 4,
    "end": 5
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5,
    "end": 6
  },
  {
    "type": "RegularExpression",
    "value": "/ (\\\\ ? | & ) rct = j /",
    "regex": {
      "flags": "",
      "pattern": " (\\\\ ? | & ) rct = j "
    },
    "start": 7,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 31,
    "end": 32
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 32,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 36,
    "end": 37
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 38,
    "end": 39
  },
  {
    "type": "Identifier",
    "value": "href",
    "start": 39,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 43,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 44,
    "end": 45
  }
]
```
