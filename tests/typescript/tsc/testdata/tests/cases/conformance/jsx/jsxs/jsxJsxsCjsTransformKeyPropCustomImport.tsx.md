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
            "name": "props",
            "optional": false,
            "typeAnnotation": null,
            "start": 50,
            "end": 55
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "answer",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 60,
                  "end": 66
                },
                "value": {
                  "type": "Literal",
                  "value": 42,
                  "raw": "42",
                  "start": 68,
                  "end": 70
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 60,
                "end": 70
              }
            ],
            "start": 58,
            "end": 72
          },
          "definite": false,
          "start": 50,
          "end": 72
        }
      ],
      "declare": false,
      "start": 44,
      "end": 72
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
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 79,
            "end": 80
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 84,
                "end": 87
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "key",
                    "start": 88,
                    "end": 91
                  },
                  "value": {
                    "type": "Literal",
                    "value": "foo",
                    "raw": "\"foo\"",
                    "start": 92,
                    "end": 97
                  },
                  "start": 88,
                  "end": 97
                },
                {
                  "type": "JSXSpreadAttribute",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "props",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 102,
                    "end": 107
                  },
                  "start": 98,
                  "end": 108
                }
              ],
              "selfClosing": false,
              "start": 83,
              "end": 109
            },
            "children": [
              {
                "type": "JSXText",
                "value": "text",
                "raw": "text",
                "start": 109,
                "end": 113
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 115,
                "end": 118
              },
              "start": 113,
              "end": 119
            },
            "start": 83,
            "end": 119
          },
          "definite": false,
          "start": 79,
          "end": 119
        }
      ],
      "declare": false,
      "start": 73,
      "end": 120
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
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 127,
            "end": 128
          },
          "init": {
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
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "props",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 140,
                    "end": 145
                  },
                  "start": 136,
                  "end": 146
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "key",
                    "start": 147,
                    "end": 150
                  },
                  "value": {
                    "type": "Literal",
                    "value": "bar",
                    "raw": "\"bar\"",
                    "start": 151,
                    "end": 156
                  },
                  "start": 147,
                  "end": 156
                }
              ],
              "selfClosing": false,
              "start": 131,
              "end": 157
            },
            "children": [
              {
                "type": "JSXText",
                "value": "text",
                "raw": "text",
                "start": 157,
                "end": 161
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 163,
                "end": 166
              },
              "start": 161,
              "end": 167
            },
            "start": 131,
            "end": 167
          },
          "definite": false,
          "start": 127,
          "end": 167
        }
      ],
      "declare": false,
      "start": 121,
      "end": 168
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 170,
      "end": 180
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 44,
  "end": 180
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
    "value": "props",
    "start": 50,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 56,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 58,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "answer",
    "start": 60,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 66,
    "end": 67
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 68,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 71,
    "end": 72
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 73,
    "end": 78
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 79,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 81,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 83,
    "end": 84
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 84,
    "end": 87
  },
  {
    "type": "JSXIdentifier",
    "value": "key",
    "start": 88,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 91,
    "end": 92
  },
  {
    "type": "JSXText",
    "value": "\"foo\"",
    "start": 92,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 98,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 99,
    "end": 102
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 102,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 107,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 108,
    "end": 109
  },
  {
    "type": "JSXText",
    "value": "text",
    "start": 109,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 113,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 114,
    "end": 115
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 115,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 118,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 119,
    "end": 120
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 121,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 127,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 129,
    "end": 130
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
    "value": "{",
    "start": 136,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 137,
    "end": 140
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 140,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 145,
    "end": 146
  },
  {
    "type": "JSXIdentifier",
    "value": "key",
    "start": 147,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 150,
    "end": 151
  },
  {
    "type": "JSXText",
    "value": "\"bar\"",
    "start": 151,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 156,
    "end": 157
  },
  {
    "type": "JSXText",
    "value": "text",
    "start": 157,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 161,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 162,
    "end": 163
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 163,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 166,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 167,
    "end": 168
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 170,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 177,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 178,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 179,
    "end": 180
  }
]
```
