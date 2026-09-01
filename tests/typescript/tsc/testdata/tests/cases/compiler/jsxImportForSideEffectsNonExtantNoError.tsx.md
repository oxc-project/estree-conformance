__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "React",
            "optional": false,
            "typeAnnotation": null,
            "start": 56,
            "end": 61
          },
          "start": 51,
          "end": 61
        }
      ],
      "source": {
        "type": "Literal",
        "value": "react",
        "raw": "\"react\"",
        "start": 67,
        "end": 74
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 44,
      "end": 75
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [],
      "source": {
        "type": "Literal",
        "value": "./App.css",
        "raw": "\"./App.css\"",
        "start": 84,
        "end": 95
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 77,
      "end": 96
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "tag",
            "optional": false,
            "typeAnnotation": null,
            "start": 130,
            "end": 133
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 137,
                "end": 140
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": false,
              "start": 136,
              "end": 141
            },
            "children": [],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 143,
                "end": 146
              },
              "start": 141,
              "end": 147
            },
            "start": 136,
            "end": 147
          },
          "definite": false,
          "start": 130,
          "end": 147
        }
      ],
      "declare": false,
      "start": 124,
      "end": 148
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 44,
  "end": 148
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 44,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 51,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 53,
    "end": 55
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 56,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 62,
    "end": 66
  },
  {
    "type": "String",
    "value": "\"react\"",
    "start": 67,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 74,
    "end": 75
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 77,
    "end": 83
  },
  {
    "type": "String",
    "value": "\"./App.css\"",
    "start": 84,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 95,
    "end": 96
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 124,
    "end": 129
  },
  {
    "type": "Identifier",
    "value": "tag",
    "start": 130,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 134,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 136,
    "end": 137
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 137,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 140,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 141,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 142,
    "end": 143
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 143,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 146,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 147,
    "end": 148
  }
]
```
