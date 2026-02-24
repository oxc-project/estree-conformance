__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "href",
              "optional": false,
              "typeAnnotation": null,
              "start": 0,
              "end": 4
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "match",
              "optional": false,
              "typeAnnotation": null,
              "start": 5,
              "end": 10
            },
            "optional": false,
            "computed": false,
            "start": 0,
            "end": 10
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": null,
              "raw": "/:\\/\\/(.[^/]+)/",
              "regex": {
                "pattern": ":\\/\\/(.[^/]+)",
                "flags": ""
              },
              "start": 11,
              "end": 26
            }
          ],
          "optional": false,
          "start": 0,
          "end": 27
        },
        "property": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 28,
          "end": 29
        },
        "optional": false,
        "computed": true,
        "start": 0,
        "end": 30
      },
      "directive": null,
      "start": 0,
      "end": 31
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 31
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "href",
    "start": 0,
    "end": 4
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4,
    "end": 5
  },
  {
    "type": "Identifier",
    "value": "match",
    "start": 5,
    "end": 10
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 10,
    "end": 11
  },
  {
    "type": "RegularExpression",
    "value": "/:\\/\\/(.[^/]+)/",
    "regex": {
      "flags": "",
      "pattern": ":\\/\\/(.[^/]+)"
    },
    "start": 11,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 26,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 27,
    "end": 28
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 28,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 29,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 30,
    "end": 31
  }
]
```
