__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "nope",
            "start": 1,
            "end": 5
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": true,
          "start": 0,
          "end": 8
        },
        "children": [],
        "closingElement": null,
        "start": 0,
        "end": 8
      },
      "directive": null,
      "start": 0,
      "end": 9
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 9
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Punctuator",
    "value": "<",
    "start": 0,
    "end": 1
  },
  {
    "type": "JSXIdentifier",
    "value": "nope",
    "start": 1,
    "end": 5
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 6,
    "end": 7
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 7,
    "end": 8
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8,
    "end": 9
  }
]
```
