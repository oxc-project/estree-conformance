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
            "start": 57,
            "end": 62
          },
          "start": 52,
          "end": 62
        }
      ],
      "source": {
        "type": "Literal",
        "value": "react",
        "raw": "\"react\"",
        "start": 68,
        "end": 75
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 45,
      "end": 76
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
            "name": "El",
            "optional": false,
            "typeAnnotation": null,
            "start": 84,
            "end": 86
          },
          "init": {
            "type": "ConditionalExpression",
            "test": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Math",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 89,
                  "end": 93
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "random",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 94,
                  "end": 100
                },
                "optional": false,
                "computed": false,
                "start": 89,
                "end": 100
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 89,
              "end": 102
            },
            "consequent": {
              "type": "Literal",
              "value": "h1",
              "raw": "'h1'",
              "start": 105,
              "end": 109
            },
            "alternate": {
              "type": "Literal",
              "value": "h2",
              "raw": "'h2'",
              "start": 112,
              "end": 116
            },
            "start": 89,
            "end": 116
          },
          "definite": false,
          "start": 84,
          "end": 116
        }
      ],
      "declare": false,
      "start": 78,
      "end": 117
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
            "start": 125,
            "end": 128
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "El",
                "start": 132,
                "end": 134
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "className",
                    "start": 135,
                    "end": 144
                  },
                  "value": {
                    "type": "Literal",
                    "value": "ok",
                    "raw": "\"ok\"",
                    "start": 145,
                    "end": 149
                  },
                  "start": 135,
                  "end": 149
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "key",
                    "start": 150,
                    "end": 153
                  },
                  "value": {
                    "type": "Literal",
                    "value": "key",
                    "raw": "\"key\"",
                    "start": 154,
                    "end": 159
                  },
                  "start": 150,
                  "end": 159
                }
              ],
              "selfClosing": false,
              "start": 131,
              "end": 160
            },
            "children": [
              {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "Literal",
                  "value": "Title",
                  "raw": "\"Title\"",
                  "start": 161,
                  "end": 168
                },
                "start": 160,
                "end": 169
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "El",
                "start": 171,
                "end": 173
              },
              "start": 169,
              "end": 174
            },
            "start": 131,
            "end": 174
          },
          "definite": false,
          "start": 125,
          "end": 174
        }
      ],
      "declare": false,
      "start": 119,
      "end": 175
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 45,
  "end": 175
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 45,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 52,
    "end": 53
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 54,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 57,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 63,
    "end": 67
  },
  {
    "type": "String",
    "value": "\"react\"",
    "start": 68,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 75,
    "end": 76
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 78,
    "end": 83
  },
  {
    "type": "Identifier",
    "value": "El",
    "start": 84,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 87,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "Math",
    "start": 89,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 93,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "random",
    "start": 94,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 100,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 101,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 103,
    "end": 104
  },
  {
    "type": "String",
    "value": "'h1'",
    "start": 105,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 110,
    "end": 111
  },
  {
    "type": "String",
    "value": "'h2'",
    "start": 112,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 116,
    "end": 117
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 119,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "tag",
    "start": 125,
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
    "value": "El",
    "start": 132,
    "end": 134
  },
  {
    "type": "JSXIdentifier",
    "value": "className",
    "start": 135,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 144,
    "end": 145
  },
  {
    "type": "JSXText",
    "value": "\"ok\"",
    "start": 145,
    "end": 149
  },
  {
    "type": "JSXIdentifier",
    "value": "key",
    "start": 150,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 153,
    "end": 154
  },
  {
    "type": "JSXText",
    "value": "\"key\"",
    "start": 154,
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
    "type": "String",
    "value": "\"Title\"",
    "start": 161,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 168,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 169,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 170,
    "end": 171
  },
  {
    "type": "JSXIdentifier",
    "value": "El",
    "start": 171,
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
    "value": ";",
    "start": 174,
    "end": 175
  }
]
```
