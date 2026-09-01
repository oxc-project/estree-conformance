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
            "start": 110,
            "end": 111
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "main",
                "start": 119,
                "end": 123
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": false,
              "start": 118,
              "end": 124
            },
            "children": [
              {
                "type": "JSXText",
                "value": "\n    ",
                "raw": "\n    ",
                "start": 124,
                "end": 129
              },
              {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "JSXElement",
                    "openingElement": {
                      "type": "JSXOpeningElement",
                      "name": {
                        "type": "JSXIdentifier",
                        "name": "div",
                        "start": 132,
                        "end": 135
                      },
                      "typeArguments": null,
                      "attributes": [],
                      "selfClosing": true,
                      "start": 131,
                      "end": 138
                    },
                    "children": [],
                    "closingElement": null,
                    "start": 131,
                    "end": 138
                  },
                  "typeAnnotation": {
                    "type": "TSUnknownKeyword",
                    "start": 143,
                    "end": 150
                  },
                  "start": 130,
                  "end": 150
                },
                "start": 129,
                "end": 151
              },
              {
                "type": "JSXText",
                "value": "\n    ",
                "raw": "\n    ",
                "start": 151,
                "end": 156
              },
              {
                "type": "JSXElement",
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "span",
                    "start": 157,
                    "end": 161
                  },
                  "typeArguments": null,
                  "attributes": [],
                  "selfClosing": true,
                  "start": 156,
                  "end": 164
                },
                "children": [],
                "closingElement": null,
                "start": 156,
                "end": 164
              },
              {
                "type": "JSXText",
                "value": "\n  ",
                "raw": "\n  ",
                "start": 164,
                "end": 167
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "main",
                "start": 169,
                "end": 173
              },
              "start": 167,
              "end": 174
            },
            "start": 118,
            "end": 174
          },
          "definite": false,
          "start": 110,
          "end": 176
        }
      ],
      "declare": false,
      "start": 104,
      "end": 177
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 104,
  "end": 177
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 104,
    "end": 109
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 110,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 112,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 114,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 118,
    "end": 119
  },
  {
    "type": "JSXIdentifier",
    "value": "main",
    "start": 119,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 123,
    "end": 124
  },
  {
    "type": "JSXText",
    "value": "\n    ",
    "start": 124,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 129,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 130,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 131,
    "end": 132
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 132,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 136,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 137,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 138,
    "end": 139
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 140,
    "end": 142
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 143,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 150,
    "end": 151
  },
  {
    "type": "JSXText",
    "value": "\n    ",
    "start": 151,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 156,
    "end": 157
  },
  {
    "type": "JSXIdentifier",
    "value": "span",
    "start": 157,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 162,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 163,
    "end": 164
  },
  {
    "type": "JSXText",
    "value": "\n  ",
    "start": 164,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 167,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 168,
    "end": 169
  },
  {
    "type": "JSXIdentifier",
    "value": "main",
    "start": 169,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 173,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 175,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 176,
    "end": 177
  }
]
```
