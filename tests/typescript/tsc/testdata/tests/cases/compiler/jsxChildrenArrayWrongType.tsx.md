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
        "start": 167,
        "end": 176
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
              "start": 183,
              "end": 191
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
                        "start": 194,
                        "end": 200
                      },
                      {
                        "type": "TSNumberKeyword",
                        "start": 202,
                        "end": 208
                      }
                    ],
                    "start": 193,
                    "end": 209
                  },
                  {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSBooleanKeyword",
                      "start": 212,
                      "end": 219
                    },
                    "start": 212,
                    "end": 221
                  }
                ],
                "start": 193,
                "end": 221
              },
              "start": 191,
              "end": 221
            },
            "accessibility": null,
            "static": false,
            "start": 183,
            "end": 222
          }
        ],
        "start": 177,
        "end": 224
      },
      "declare": false,
      "start": 157,
      "end": 224
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
        "start": 239,
        "end": 242
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
          "start": 251,
          "end": 256
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "Component",
          "optional": false,
          "typeAnnotation": null,
          "start": 257,
          "end": 266
        },
        "optional": false,
        "computed": false,
        "start": 251,
        "end": 266
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
              "start": 267,
              "end": 276
            },
            "typeArguments": null,
            "start": 267,
            "end": 276
          },
          {
            "type": "TSTypeLiteral",
            "members": [],
            "start": 278,
            "end": 280
          }
        ],
        "start": 266,
        "end": 281
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 282,
        "end": 284
      },
      "abstract": false,
      "declare": true,
      "start": 225,
      "end": 284
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
            "start": 291,
            "end": 292
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Foo",
                "start": 302,
                "end": 305
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": false,
              "start": 301,
              "end": 306
            },
            "children": [
              {
                "type": "JSXText",
                "value": "\n        ",
                "raw": "\n        ",
                "start": 306,
                "end": 315
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
                        "start": 317,
                        "end": 320
                      },
                      "typeArguments": null,
                      "attributes": [],
                      "selfClosing": true,
                      "start": 316,
                      "end": 322
                    },
                    "children": [],
                    "closingElement": null,
                    "start": 316,
                    "end": 322
                  },
                  "typeAnnotation": {
                    "type": "TSUnknownKeyword",
                    "start": 326,
                    "end": 333
                  },
                  "start": 316,
                  "end": 333
                },
                "start": 315,
                "end": 334
              },
              {
                "type": "JSXText",
                "value": "\n        ",
                "raw": "\n        ",
                "start": 334,
                "end": 343
              },
              {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "Literal",
                  "value": "aa",
                  "raw": "\"aa\"",
                  "start": 344,
                  "end": 348
                },
                "start": 343,
                "end": 349
              },
              {
                "type": "JSXText",
                "value": "\n    ",
                "raw": "\n    ",
                "start": 349,
                "end": 354
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Foo",
                "start": 356,
                "end": 359
              },
              "start": 354,
              "end": 360
            },
            "start": 301,
            "end": 360
          },
          "definite": false,
          "start": 291,
          "end": 362
        }
      ],
      "declare": false,
      "start": 285,
      "end": 363
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 157,
  "end": 363
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 157,
    "end": 166
  },
  {
    "type": "Identifier",
    "value": "PropsType",
    "start": 167,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 177,
    "end": 178
  },
  {
    "type": "Identifier",
    "value": "children",
    "start": 183,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 191,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 193,
    "end": 194
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 194,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 200,
    "end": 201
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 202,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 208,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 210,
    "end": 211
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 212,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 219,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 220,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 221,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 223,
    "end": 224
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 225,
    "end": 232
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 233,
    "end": 238
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 239,
    "end": 242
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 243,
    "end": 250
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 251,
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
    "value": "Component",
    "start": 257,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 266,
    "end": 267
  },
  {
    "type": "Identifier",
    "value": "PropsType",
    "start": 267,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 276,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 278,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 279,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 280,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 282,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 283,
    "end": 284
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 285,
    "end": 290
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 291,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 293,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 295,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 301,
    "end": 302
  },
  {
    "type": "JSXIdentifier",
    "value": "Foo",
    "start": 302,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 305,
    "end": 306
  },
  {
    "type": "JSXText",
    "value": "\n        ",
    "start": 306,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 315,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 316,
    "end": 317
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 317,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 320,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 321,
    "end": 322
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 323,
    "end": 325
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 326,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 333,
    "end": 334
  },
  {
    "type": "JSXText",
    "value": "\n        ",
    "start": 334,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 343,
    "end": 344
  },
  {
    "type": "String",
    "value": "\"aa\"",
    "start": 344,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 348,
    "end": 349
  },
  {
    "type": "JSXText",
    "value": "\n    ",
    "start": 349,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 354,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 355,
    "end": 356
  },
  {
    "type": "JSXIdentifier",
    "value": "Foo",
    "start": 356,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 359,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 361,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 362,
    "end": 363
  }
]
```
