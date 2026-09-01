__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "n1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 8,
                  "end": 14
                },
                "start": 8,
                "end": 16
              },
              "start": 6,
              "end": 16
            },
            "start": 4,
            "end": 16
          },
          "init": null,
          "definite": false,
          "start": 4,
          "end": 16
        }
      ],
      "declare": false,
      "start": 0,
      "end": 17
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "fa",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 217,
                  "end": 223
                },
                "start": 217,
                "end": 225
              },
              "start": 215,
              "end": 225
            },
            "start": 213,
            "end": 225
          },
          "init": null,
          "definite": false,
          "start": 213,
          "end": 225
        }
      ],
      "declare": false,
      "start": 209,
      "end": 226
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "fa",
          "optional": false,
          "typeAnnotation": null,
          "start": 228,
          "end": 230
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "fa",
              "optional": false,
              "typeAnnotation": null,
              "start": 233,
              "end": 235
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "concat",
              "optional": false,
              "typeAnnotation": null,
              "start": 236,
              "end": 242
            },
            "optional": false,
            "computed": false,
            "start": 233,
            "end": 242
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 244,
                  "end": 245
                }
              ],
              "start": 243,
              "end": 246
            }
          ],
          "optional": false,
          "start": 233,
          "end": 247
        },
        "start": 228,
        "end": 247
      },
      "directive": null,
      "start": 228,
      "end": 248
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "fa",
          "optional": false,
          "typeAnnotation": null,
          "start": 249,
          "end": 251
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "fa",
              "optional": false,
              "typeAnnotation": null,
              "start": 254,
              "end": 256
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "concat",
              "optional": false,
              "typeAnnotation": null,
              "start": 257,
              "end": 263
            },
            "optional": false,
            "computed": false,
            "start": 254,
            "end": 263
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 264,
              "end": 265
            }
          ],
          "optional": false,
          "start": 254,
          "end": 266
        },
        "start": 249,
        "end": 266
      },
      "directive": null,
      "start": 249,
      "end": 267
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 406
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 0,
    "end": 3
  },
  {
    "type": "Identifier",
    "value": "n1",
    "start": 4,
    "end": 6
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6,
    "end": 7
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 8,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 14,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 15,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 16,
    "end": 17
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 209,
    "end": 212
  },
  {
    "type": "Identifier",
    "value": "fa",
    "start": 213,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 215,
    "end": 216
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 217,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 223,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 224,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 225,
    "end": 226
  },
  {
    "type": "Identifier",
    "value": "fa",
    "start": 228,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 231,
    "end": 232
  },
  {
    "type": "Identifier",
    "value": "fa",
    "start": 233,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 235,
    "end": 236
  },
  {
    "type": "Identifier",
    "value": "concat",
    "start": 236,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 242,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 243,
    "end": 244
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 244,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 245,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 246,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 247,
    "end": 248
  },
  {
    "type": "Identifier",
    "value": "fa",
    "start": 249,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 252,
    "end": 253
  },
  {
    "type": "Identifier",
    "value": "fa",
    "start": 254,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 256,
    "end": 257
  },
  {
    "type": "Identifier",
    "value": "concat",
    "start": 257,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 263,
    "end": 264
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 264,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 265,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 266,
    "end": 267
  }
]
```
