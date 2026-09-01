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
            "name": "foo",
            "start": 1,
            "end": 4
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "data",
                "start": 5,
                "end": 9
              },
              "value": null,
              "start": 5,
              "end": 9
            }
          ],
          "selfClosing": true,
          "start": 0,
          "end": 11
        },
        "children": [],
        "closingElement": null,
        "start": 0,
        "end": 11
      },
      "directive": null,
      "start": 0,
      "end": 12
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 12
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
    "value": "foo",
    "start": 1,
    "end": 4
  },
  {
    "type": "JSXIdentifier",
    "value": "data",
    "start": 5,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 9,
    "end": 10
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 10,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 11,
    "end": 12
  }
]
```
