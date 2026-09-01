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
            "name": "test",
            "optional": false,
            "typeAnnotation": null,
            "start": 110,
            "end": 114
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "Literal",
              "value": "asd",
              "raw": "\"asd\"",
              "start": 123,
              "end": 128
            },
            "id": null,
            "generator": false,
            "start": 117,
            "end": 128
          },
          "definite": false,
          "start": 110,
          "end": 128
        }
      ],
      "declare": false,
      "start": 104,
      "end": 129
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
            "name": "jsxWithJsxFragment",
            "optional": false,
            "typeAnnotation": null,
            "start": 137,
            "end": 155
          },
          "init": {
            "type": "JSXFragment",
            "openingFragment": {
              "type": "JSXOpeningFragment",
              "start": 158,
              "end": 160
            },
            "children": [
              {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "test",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 161,
                  "end": 165
                },
                "start": 160,
                "end": 166
              }
            ],
            "closingFragment": {
              "type": "JSXClosingFragment",
              "start": 166,
              "end": 169
            },
            "start": 158,
            "end": 169
          },
          "definite": false,
          "start": 137,
          "end": 169
        }
      ],
      "declare": false,
      "start": 131,
      "end": 170
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
            "name": "jsxWithReactFragment",
            "optional": false,
            "typeAnnotation": null,
            "start": 177,
            "end": 197
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXMemberExpression",
                "object": {
                  "type": "JSXIdentifier",
                  "name": "React",
                  "start": 201,
                  "end": 206
                },
                "property": {
                  "type": "JSXIdentifier",
                  "name": "Fragment",
                  "start": 207,
                  "end": 215
                },
                "start": 201,
                "end": 215
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": false,
              "start": 200,
              "end": 216
            },
            "children": [
              {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "test",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 217,
                  "end": 221
                },
                "start": 216,
                "end": 222
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXMemberExpression",
                "object": {
                  "type": "JSXIdentifier",
                  "name": "React",
                  "start": 224,
                  "end": 229
                },
                "property": {
                  "type": "JSXIdentifier",
                  "name": "Fragment",
                  "start": 230,
                  "end": 238
                },
                "start": 224,
                "end": 238
              },
              "start": 222,
              "end": 239
            },
            "start": 200,
            "end": 239
          },
          "definite": false,
          "start": 177,
          "end": 239
        }
      ],
      "declare": false,
      "start": 171,
      "end": 240
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 104,
  "end": 240
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
    "value": "test",
    "start": 110,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 115,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 117,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 118,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 120,
    "end": 122
  },
  {
    "type": "String",
    "value": "\"asd\"",
    "start": 123,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 128,
    "end": 129
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 131,
    "end": 136
  },
  {
    "type": "Identifier",
    "value": "jsxWithJsxFragment",
    "start": 137,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 156,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 158,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 159,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 160,
    "end": 161
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 161,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 165,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 166,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 167,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 168,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 169,
    "end": 170
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 171,
    "end": 176
  },
  {
    "type": "Identifier",
    "value": "jsxWithReactFragment",
    "start": 177,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 198,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 200,
    "end": 201
  },
  {
    "type": "JSXIdentifier",
    "value": "React",
    "start": 201,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 206,
    "end": 207
  },
  {
    "type": "JSXIdentifier",
    "value": "Fragment",
    "start": 207,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 215,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 216,
    "end": 217
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 217,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 221,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 222,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 223,
    "end": 224
  },
  {
    "type": "JSXIdentifier",
    "value": "React",
    "start": 224,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 229,
    "end": 230
  },
  {
    "type": "JSXIdentifier",
    "value": "Fragment",
    "start": 230,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 238,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 239,
    "end": 240
  }
]
```
