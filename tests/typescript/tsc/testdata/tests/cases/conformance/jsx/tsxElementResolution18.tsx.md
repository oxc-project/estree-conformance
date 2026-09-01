__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "JSX",
        "optional": false,
        "typeAnnotation": null,
        "start": 18,
        "end": 21
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Element",
              "optional": false,
              "typeAnnotation": null,
              "start": 35,
              "end": 42
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 43,
              "end": 46
            },
            "declare": false,
            "start": 25,
            "end": 46
          }
        ],
        "start": 22,
        "end": 48
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 48
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "div",
            "start": 79,
            "end": 82
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "n",
                "start": 83,
                "end": 84
              },
              "value": {
                "type": "Literal",
                "value": "x",
                "raw": "'x'",
                "start": 85,
                "end": 88
              },
              "start": 83,
              "end": 88
            }
          ],
          "selfClosing": true,
          "start": 78,
          "end": 91
        },
        "children": [],
        "closingElement": null,
        "start": 78,
        "end": 91
      },
      "directive": null,
      "start": 78,
      "end": 92
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 92
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 0,
    "end": 7
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 8,
    "end": 17
  },
  {
    "type": "Identifier",
    "value": "JSX",
    "start": 18,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 22,
    "end": 23
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 25,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 35,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 43,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 45,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 78,
    "end": 79
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 79,
    "end": 82
  },
  {
    "type": "JSXIdentifier",
    "value": "n",
    "start": 83,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 84,
    "end": 85
  },
  {
    "type": "JSXText",
    "value": "'x'",
    "start": 85,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 89,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 90,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 91,
    "end": 92
  }
]
```
