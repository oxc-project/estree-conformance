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
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 50,
            "end": 51
          },
          "init": {
            "type": "JSXFragment",
            "openingFragment": {
              "type": "JSXOpeningFragment",
              "start": 54,
              "end": 56
            },
            "children": [
              {
                "type": "JSXText",
                "value": "\n  ",
                "raw": "\n  ",
                "start": 56,
                "end": 59
              },
              {
                "type": "JSXElement",
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "p",
                    "start": 60,
                    "end": 61
                  },
                  "typeArguments": null,
                  "attributes": [],
                  "selfClosing": false,
                  "start": 59,
                  "end": 62
                },
                "children": [],
                "closingElement": {
                  "type": "JSXClosingElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "p",
                    "start": 64,
                    "end": 65
                  },
                  "start": 62,
                  "end": 66
                },
                "start": 59,
                "end": 66
              },
              {
                "type": "JSXText",
                "value": "\n  text\n  ",
                "raw": "\n  text\n  ",
                "start": 66,
                "end": 76
              },
              {
                "type": "JSXElement",
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "div",
                    "start": 77,
                    "end": 80
                  },
                  "typeArguments": null,
                  "attributes": [],
                  "selfClosing": false,
                  "start": 76,
                  "end": 81
                },
                "children": [],
                "closingElement": {
                  "type": "JSXClosingElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "div",
                    "start": 83,
                    "end": 86
                  },
                  "start": 81,
                  "end": 87
                },
                "start": 76,
                "end": 87
              },
              {
                "type": "JSXText",
                "value": "\n",
                "raw": "\n",
                "start": 87,
                "end": 88
              }
            ],
            "closingFragment": {
              "type": "JSXClosingFragment",
              "start": 88,
              "end": 91
            },
            "start": 54,
            "end": 91
          },
          "definite": false,
          "start": 50,
          "end": 91
        }
      ],
      "declare": false,
      "start": 44,
      "end": 91
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 93,
      "end": 103
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 44,
  "end": 103
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 44,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "a",
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
    "type": "Punctuator",
    "value": "<",
    "start": 54,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 55,
    "end": 56
  },
  {
    "type": "JSXText",
    "value": "\n  ",
    "start": 56,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 59,
    "end": 60
  },
  {
    "type": "JSXIdentifier",
    "value": "p",
    "start": 60,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 61,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 62,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 63,
    "end": 64
  },
  {
    "type": "JSXIdentifier",
    "value": "p",
    "start": 64,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 65,
    "end": 66
  },
  {
    "type": "JSXText",
    "value": "\n  text\n  ",
    "start": 66,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 76,
    "end": 77
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 77,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 80,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 81,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 82,
    "end": 83
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 83,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 86,
    "end": 87
  },
  {
    "type": "JSXText",
    "value": "\n",
    "start": 87,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 88,
    "end": 89
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
    "type": "Keyword",
    "value": "export",
    "start": 93,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 100,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 101,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 102,
    "end": 103
  }
]
```
