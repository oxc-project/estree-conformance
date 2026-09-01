__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PropsType",
        "optional": false,
        "typeAnnotation": null,
        "start": 115,
        "end": 124
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "children",
              "optional": false,
              "typeAnnotation": null,
              "start": 131,
              "end": 139
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTupleType",
                    "elementTypes": [
                      {
                        "type": "TSStringKeyword",
                        "start": 142,
                        "end": 148
                      },
                      {
                        "type": "TSOptionalType",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 150,
                          "end": 156
                        },
                        "start": 150,
                        "end": 157
                      }
                    ],
                    "start": 141,
                    "end": 158
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Iterable",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 161,
                      "end": 169
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSBooleanKeyword",
                          "start": 170,
                          "end": 177
                        }
                      ],
                      "start": 169,
                      "end": 178
                    },
                    "start": 161,
                    "end": 178
                  }
                ],
                "start": 141,
                "end": 178
              },
              "start": 139,
              "end": 178
            },
            "accessibility": null,
            "static": false,
            "start": 131,
            "end": 179
          }
        ],
        "start": 125,
        "end": 181
      },
      "declare": false,
      "start": 105,
      "end": 181
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 196,
        "end": 199
      },
      "typeParameters": null,
      "superClass": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "React",
          "optional": false,
          "typeAnnotation": null,
          "start": 208,
          "end": 213
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "Component",
          "optional": false,
          "typeAnnotation": null,
          "start": 214,
          "end": 223
        },
        "optional": false,
        "computed": false,
        "start": 208,
        "end": 223
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "params": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "PropsType",
              "optional": false,
              "typeAnnotation": null,
              "start": 224,
              "end": 233
            },
            "typeArguments": null,
            "start": 224,
            "end": 233
          },
          {
            "type": "TSTypeLiteral",
            "members": [],
            "start": 235,
            "end": 237
          }
        ],
        "start": 223,
        "end": 238
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 239,
        "end": 241
      },
      "abstract": false,
      "declare": true,
      "start": 182,
      "end": 241
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
            "start": 248,
            "end": 249
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Foo",
                "start": 259,
                "end": 262
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": false,
              "start": 258,
              "end": 263
            },
            "children": [
              {
                "type": "JSXText",
                "value": "\n        ",
                "raw": "\n        ",
                "start": 263,
                "end": 272
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
                        "start": 274,
                        "end": 277
                      },
                      "typeArguments": null,
                      "attributes": [],
                      "selfClosing": true,
                      "start": 273,
                      "end": 279
                    },
                    "children": [],
                    "closingElement": null,
                    "start": 273,
                    "end": 279
                  },
                  "typeAnnotation": {
                    "type": "TSUnknownKeyword",
                    "start": 283,
                    "end": 290
                  },
                  "start": 273,
                  "end": 290
                },
                "start": 272,
                "end": 291
              },
              {
                "type": "JSXText",
                "value": "\n        ",
                "raw": "\n        ",
                "start": 291,
                "end": 300
              },
              {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "Literal",
                  "value": "aa",
                  "raw": "\"aa\"",
                  "start": 301,
                  "end": 305
                },
                "start": 300,
                "end": 306
              },
              {
                "type": "JSXText",
                "value": "\n    ",
                "raw": "\n    ",
                "start": 306,
                "end": 311
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Foo",
                "start": 313,
                "end": 316
              },
              "start": 311,
              "end": 317
            },
            "start": 258,
            "end": 317
          },
          "definite": false,
          "start": 248,
          "end": 319
        }
      ],
      "declare": false,
      "start": 242,
      "end": 320
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 105,
  "end": 320
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 105,
    "end": 114
  },
  {
    "type": "Identifier",
    "value": "PropsType",
    "start": 115,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 125,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "children",
    "start": 131,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 139,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 141,
    "end": 142
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 142,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 148,
    "end": 149
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 150,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 156,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 157,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 159,
    "end": 160
  },
  {
    "type": "Identifier",
    "value": "Iterable",
    "start": 161,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 169,
    "end": 170
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 170,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 177,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 178,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 180,
    "end": 181
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 182,
    "end": 189
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 190,
    "end": 195
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 196,
    "end": 199
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 200,
    "end": 207
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 208,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 213,
    "end": 214
  },
  {
    "type": "Identifier",
    "value": "Component",
    "start": 214,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 223,
    "end": 224
  },
  {
    "type": "Identifier",
    "value": "PropsType",
    "start": 224,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 233,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 235,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 236,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 237,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 239,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 240,
    "end": 241
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 242,
    "end": 247
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 248,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 250,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 252,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 258,
    "end": 259
  },
  {
    "type": "JSXIdentifier",
    "value": "Foo",
    "start": 259,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 262,
    "end": 263
  },
  {
    "type": "JSXText",
    "value": "\n        ",
    "start": 263,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 272,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 273,
    "end": 274
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 274,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 277,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 278,
    "end": 279
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 280,
    "end": 282
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 283,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 290,
    "end": 291
  },
  {
    "type": "JSXText",
    "value": "\n        ",
    "start": 291,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 300,
    "end": 301
  },
  {
    "type": "String",
    "value": "\"aa\"",
    "start": 301,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 305,
    "end": 306
  },
  {
    "type": "JSXText",
    "value": "\n    ",
    "start": 306,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 311,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 312,
    "end": 313
  },
  {
    "type": "JSXIdentifier",
    "value": "Foo",
    "start": 313,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 316,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 318,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 319,
    "end": 320
  }
]
```
