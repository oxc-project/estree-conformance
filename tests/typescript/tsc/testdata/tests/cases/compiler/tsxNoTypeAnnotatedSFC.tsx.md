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
            "start": 92,
            "end": 97
          },
          "start": 87,
          "end": 97
        }
      ],
      "source": {
        "type": "Literal",
        "value": "react",
        "raw": "'react'",
        "start": 103,
        "end": 110
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 80,
      "end": 111
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
            "name": "Test123",
            "optional": false,
            "typeAnnotation": null,
            "start": 119,
            "end": 126
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "JSXElement",
              "openingElement": {
                "type": "JSXOpeningElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "div",
                  "start": 136,
                  "end": 139
                },
                "typeArguments": null,
                "attributes": [],
                "selfClosing": true,
                "start": 135,
                "end": 141
              },
              "children": [],
              "closingElement": null,
              "start": 135,
              "end": 141
            },
            "id": null,
            "generator": false,
            "start": 129,
            "end": 141
          },
          "definite": false,
          "start": 119,
          "end": 141
        }
      ],
      "declare": false,
      "start": 113,
      "end": 142
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testComponent",
        "optional": false,
        "typeAnnotation": null,
        "start": 153,
        "end": 166
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "props",
          "optional": false,
          "typeAnnotation": null,
          "start": 167,
          "end": 172
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "JSXElement",
              "openingElement": {
                "type": "JSXOpeningElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "Test123",
                  "start": 188,
                  "end": 195
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
                      "start": 200,
                      "end": 205
                    },
                    "start": 196,
                    "end": 206
                  }
                ],
                "selfClosing": true,
                "start": 187,
                "end": 208
              },
              "children": [],
              "closingElement": null,
              "start": 187,
              "end": 208
            },
            "start": 180,
            "end": 209
          }
        ],
        "start": 174,
        "end": 211
      },
      "expression": false,
      "start": 144,
      "end": 211
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 80,
  "end": 211
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 80,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 87,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 89,
    "end": 91
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 92,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 98,
    "end": 102
  },
  {
    "type": "String",
    "value": "'react'",
    "start": 103,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 110,
    "end": 111
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 113,
    "end": 118
  },
  {
    "type": "Identifier",
    "value": "Test123",
    "start": 119,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 127,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 129,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 130,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 132,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 135,
    "end": 136
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 136,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 139,
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
    "value": ";",
    "start": 141,
    "end": 142
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 144,
    "end": 152
  },
  {
    "type": "Identifier",
    "value": "testComponent",
    "start": 153,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 166,
    "end": 167
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 167,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 172,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 174,
    "end": 175
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 180,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 187,
    "end": 188
  },
  {
    "type": "JSXIdentifier",
    "value": "Test123",
    "start": 188,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 196,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 197,
    "end": 200
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 200,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 205,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 206,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 207,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 208,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 210,
    "end": 211
  }
]
```
