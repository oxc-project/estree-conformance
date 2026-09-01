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
            "start": 34,
            "end": 37
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "data",
                "start": 38,
                "end": 42
              },
              "value": null,
              "start": 38,
              "end": 42
            }
          ],
          "selfClosing": true,
          "start": 33,
          "end": 44
        },
        "children": [],
        "closingElement": null,
        "start": 33,
        "end": 44
      },
      "directive": null,
      "start": 33,
      "end": 44
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 33,
  "end": 44
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Punctuator",
    "value": "<",
    "start": 33,
    "end": 34
  },
  {
    "type": "JSXIdentifier",
    "value": "foo",
    "start": 34,
    "end": 37
  },
  {
    "type": "JSXIdentifier",
    "value": "data",
    "start": 38,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 42,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 43,
    "end": 44
  }
]
```
