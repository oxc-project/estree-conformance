__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "app",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 9
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "App",
                "start": 13,
                "end": 16
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": true,
              "start": 12,
              "end": 19
            },
            "children": [],
            "closingElement": null,
            "start": 12,
            "end": 19
          },
          "definite": false,
          "start": 6,
          "end": 19
        }
      ],
      "declare": false,
      "start": 0,
      "end": 20
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 20
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 0,
    "end": 5
  },
  {
    "type": "Identifier",
    "value": "app",
    "start": 6,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 10,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 12,
    "end": 13
  },
  {
    "type": "JSXIdentifier",
    "value": "App",
    "start": 13,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 17,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 18,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 19,
    "end": 20
  }
]
```
