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
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "IntrinsicElements",
              "optional": false,
              "typeAnnotation": null,
              "start": 58,
              "end": 75
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 76,
              "end": 79
            },
            "declare": false,
            "start": 48,
            "end": 79
          }
        ],
        "start": 22,
        "end": 81
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 81
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "my",
        "optional": false,
        "typeAnnotation": null,
        "start": 93,
        "end": 95
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "div",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 118,
                        "end": 121
                      },
                      "start": 116,
                      "end": 121
                    },
                    "start": 113,
                    "end": 121
                  },
                  "init": null,
                  "definite": false,
                  "start": 113,
                  "end": 121
                }
              ],
              "declare": false,
              "start": 109,
              "end": 122
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 102,
            "end": 122
          }
        ],
        "start": 96,
        "end": 124
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 83,
      "end": 124
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXMemberExpression",
            "object": {
              "type": "JSXIdentifier",
              "name": "my",
              "start": 132,
              "end": 134
            },
            "property": {
              "type": "JSXIdentifier",
              "name": "div",
              "start": 135,
              "end": 138
            },
            "start": 132,
            "end": 138
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "n",
                "start": 139,
                "end": 140
              },
              "value": {
                "type": "Literal",
                "value": "x",
                "raw": "'x'",
                "start": 141,
                "end": 144
              },
              "start": 139,
              "end": 144
            }
          ],
          "selfClosing": true,
          "start": 131,
          "end": 147
        },
        "children": [],
        "closingElement": null,
        "start": 131,
        "end": 147
      },
      "directive": null,
      "start": 131,
      "end": 148
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXMemberExpression",
            "object": {
              "type": "JSXIdentifier",
              "name": "my",
              "start": 159,
              "end": 161
            },
            "property": {
              "type": "JSXIdentifier",
              "name": "other",
              "start": 162,
              "end": 167
            },
            "start": 159,
            "end": 167
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": true,
          "start": 158,
          "end": 170
        },
        "children": [],
        "closingElement": null,
        "start": 158,
        "end": 170
      },
      "directive": null,
      "start": 158,
      "end": 171
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "q",
        "optional": false,
        "typeAnnotation": null,
        "start": 183,
        "end": 184
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "mine",
              "optional": false,
              "typeAnnotation": null,
              "start": 198,
              "end": 202
            },
            "moduleReference": {
              "type": "Identifier",
              "decorators": [],
              "name": "my",
              "optional": false,
              "typeAnnotation": null,
              "start": 205,
              "end": 207
            },
            "importKind": "value",
            "start": 191,
            "end": 208
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "JSXElement",
              "openingElement": {
                "type": "JSXOpeningElement",
                "name": {
                  "type": "JSXMemberExpression",
                  "object": {
                    "type": "JSXIdentifier",
                    "name": "mine",
                    "start": 224,
                    "end": 228
                  },
                  "property": {
                    "type": "JSXIdentifier",
                    "name": "div",
                    "start": 229,
                    "end": 232
                  },
                  "start": 224,
                  "end": 232
                },
                "typeArguments": null,
                "attributes": [
                  {
                    "type": "JSXAttribute",
                    "name": {
                      "type": "JSXIdentifier",
                      "name": "n",
                      "start": 233,
                      "end": 234
                    },
                    "value": {
                      "type": "Literal",
                      "value": "x",
                      "raw": "'x'",
                      "start": 235,
                      "end": 238
                    },
                    "start": 233,
                    "end": 238
                  }
                ],
                "selfClosing": true,
                "start": 223,
                "end": 241
              },
              "children": [],
              "closingElement": null,
              "start": 223,
              "end": 241
            },
            "directive": null,
            "start": 223,
            "end": 242
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "JSXElement",
              "openingElement": {
                "type": "JSXOpeningElement",
                "name": {
                  "type": "JSXMemberExpression",
                  "object": {
                    "type": "JSXIdentifier",
                    "name": "mine",
                    "start": 261,
                    "end": 265
                  },
                  "property": {
                    "type": "JSXIdentifier",
                    "name": "non",
                    "start": 266,
                    "end": 269
                  },
                  "start": 261,
                  "end": 269
                },
                "typeArguments": null,
                "attributes": [],
                "selfClosing": true,
                "start": 260,
                "end": 272
              },
              "children": [],
              "closingElement": null,
              "start": 260,
              "end": 272
            },
            "directive": null,
            "start": 260,
            "end": 273
          }
        ],
        "start": 185,
        "end": 275
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 173,
      "end": 275
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 275
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
    "type": "Keyword",
    "value": "interface",
    "start": 48,
    "end": 57
  },
  {
    "type": "Identifier",
    "value": "IntrinsicElements",
    "start": 58,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 76,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 78,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 80,
    "end": 81
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 83,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "my",
    "start": 93,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 96,
    "end": 97
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 102,
    "end": 108
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 109,
    "end": 112
  },
  {
    "type": "Identifier",
    "value": "div",
    "start": 113,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 116,
    "end": 117
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 118,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 121,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 123,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 131,
    "end": 132
  },
  {
    "type": "JSXIdentifier",
    "value": "my",
    "start": 132,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 134,
    "end": 135
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 135,
    "end": 138
  },
  {
    "type": "JSXIdentifier",
    "value": "n",
    "start": 139,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 140,
    "end": 141
  },
  {
    "type": "JSXText",
    "value": "'x'",
    "start": 141,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 145,
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
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 158,
    "end": 159
  },
  {
    "type": "JSXIdentifier",
    "value": "my",
    "start": 159,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 161,
    "end": 162
  },
  {
    "type": "JSXIdentifier",
    "value": "other",
    "start": 162,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 168,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 169,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 170,
    "end": 171
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 173,
    "end": 182
  },
  {
    "type": "Identifier",
    "value": "q",
    "start": 183,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 185,
    "end": 186
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 191,
    "end": 197
  },
  {
    "type": "Identifier",
    "value": "mine",
    "start": 198,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 203,
    "end": 204
  },
  {
    "type": "Identifier",
    "value": "my",
    "start": 205,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 207,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 223,
    "end": 224
  },
  {
    "type": "JSXIdentifier",
    "value": "mine",
    "start": 224,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 228,
    "end": 229
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 229,
    "end": 232
  },
  {
    "type": "JSXIdentifier",
    "value": "n",
    "start": 233,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 234,
    "end": 235
  },
  {
    "type": "JSXText",
    "value": "'x'",
    "start": 235,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 239,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 240,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 241,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 260,
    "end": 261
  },
  {
    "type": "JSXIdentifier",
    "value": "mine",
    "start": 261,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 265,
    "end": 266
  },
  {
    "type": "JSXIdentifier",
    "value": "non",
    "start": 266,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 270,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 271,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 272,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 274,
    "end": 275
  }
]
```
