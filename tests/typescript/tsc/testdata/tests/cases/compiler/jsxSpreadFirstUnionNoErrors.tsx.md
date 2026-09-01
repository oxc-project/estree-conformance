__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "React",
            "optional": false,
            "typeAnnotation": null,
            "start": 49,
            "end": 54
          },
          "start": 49,
          "end": 54
        }
      ],
      "source": {
        "type": "Literal",
        "value": "react",
        "raw": "\"react\"",
        "start": 60,
        "end": 67
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 42,
      "end": 68
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "InfoProps",
        "optional": false,
        "typeAnnotation": null,
        "start": 75,
        "end": 84
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "status",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 91,
                  "end": 97
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "hidden",
                      "raw": "\"hidden\"",
                      "start": 99,
                      "end": 107
                    },
                    "start": 99,
                    "end": 107
                  },
                  "start": 97,
                  "end": 107
                },
                "accessibility": null,
                "static": false,
                "start": 91,
                "end": 107
              }
            ],
            "start": 89,
            "end": 109
          },
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "status",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 114,
                  "end": 120
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "visible",
                      "raw": "\"visible\"",
                      "start": 122,
                      "end": 131
                    },
                    "start": 122,
                    "end": 131
                  },
                  "start": 120,
                  "end": 131
                },
                "accessibility": null,
                "static": false,
                "start": 114,
                "end": 132
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "content",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 133,
                  "end": 140
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 142,
                    "end": 148
                  },
                  "start": 140,
                  "end": 148
                },
                "accessibility": null,
                "static": false,
                "start": 133,
                "end": 148
              }
            ],
            "start": 112,
            "end": 150
          }
        ],
        "start": 87,
        "end": 150
      },
      "declare": false,
      "start": 70,
      "end": 151
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
            "name": "Info",
            "optional": false,
            "typeAnnotation": null,
            "start": 159,
            "end": 163
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "props",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "InfoProps",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 174,
                      "end": 183
                    },
                    "typeArguments": null,
                    "start": 174,
                    "end": 183
                  },
                  "start": 172,
                  "end": 183
                },
                "start": 167,
                "end": 183
              }
            ],
            "returnType": null,
            "body": {
              "type": "ConditionalExpression",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "props",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 188,
                    "end": 193
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "status",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 194,
                    "end": 200
                  },
                  "optional": false,
                  "computed": false,
                  "start": 188,
                  "end": 200
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": "hidden",
                  "raw": "\"hidden\"",
                  "start": 205,
                  "end": 213
                },
                "start": 188,
                "end": 213
              },
              "consequent": {
                "type": "JSXElement",
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "noscript",
                    "start": 219,
                    "end": 227
                  },
                  "typeArguments": null,
                  "attributes": [],
                  "selfClosing": true,
                  "start": 218,
                  "end": 230
                },
                "children": [],
                "closingElement": null,
                "start": 218,
                "end": 230
              },
              "alternate": {
                "type": "JSXElement",
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "div",
                    "start": 236,
                    "end": 239
                  },
                  "typeArguments": null,
                  "attributes": [],
                  "selfClosing": false,
                  "start": 235,
                  "end": 240
                },
                "children": [
                  {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "props",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 241,
                        "end": 246
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "content",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 247,
                        "end": 254
                      },
                      "optional": false,
                      "computed": false,
                      "start": 241,
                      "end": 254
                    },
                    "start": 240,
                    "end": 255
                  }
                ],
                "closingElement": {
                  "type": "JSXClosingElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "div",
                    "start": 257,
                    "end": 260
                  },
                  "start": 255,
                  "end": 261
                },
                "start": 235,
                "end": 261
              },
              "start": 188,
              "end": 261
            },
            "id": null,
            "generator": false,
            "start": 166,
            "end": 261
          },
          "definite": false,
          "start": 159,
          "end": 261
        }
      ],
      "declare": false,
      "start": 153,
      "end": 262
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
            "start": 270,
            "end": 271
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Info",
                "start": 275,
                "end": 279
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "status",
                    "start": 280,
                    "end": 286
                  },
                  "value": {
                    "type": "Literal",
                    "value": "hidden",
                    "raw": "\"hidden\"",
                    "start": 287,
                    "end": 295
                  },
                  "start": 280,
                  "end": 295
                }
              ],
              "selfClosing": true,
              "start": 274,
              "end": 298
            },
            "children": [],
            "closingElement": null,
            "start": 274,
            "end": 298
          },
          "definite": false,
          "start": 270,
          "end": 298
        }
      ],
      "declare": false,
      "start": 264,
      "end": 299
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
            "start": 306,
            "end": 307
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Info",
                "start": 311,
                "end": 315
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "status",
                    "start": 316,
                    "end": 322
                  },
                  "value": {
                    "type": "Literal",
                    "value": "visible",
                    "raw": "\"visible\"",
                    "start": 323,
                    "end": 332
                  },
                  "start": 316,
                  "end": 332
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "content",
                    "start": 333,
                    "end": 340
                  },
                  "value": {
                    "type": "Literal",
                    "value": "hello world",
                    "raw": "\"hello world\"",
                    "start": 341,
                    "end": 354
                  },
                  "start": 333,
                  "end": 354
                }
              ],
              "selfClosing": true,
              "start": 310,
              "end": 357
            },
            "children": [],
            "closingElement": null,
            "start": 310,
            "end": 357
          },
          "definite": false,
          "start": 306,
          "end": 357
        }
      ],
      "declare": false,
      "start": 300,
      "end": 358
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
            "name": "infoProps",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "InfoProps",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 384,
                  "end": 393
                },
                "typeArguments": null,
                "start": 384,
                "end": 393
              },
              "start": 382,
              "end": 393
            },
            "start": 373,
            "end": 393
          },
          "init": null,
          "definite": false,
          "start": 373,
          "end": 393
        }
      ],
      "declare": true,
      "start": 359,
      "end": 394
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
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 402,
            "end": 403
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Info",
                "start": 407,
                "end": 411
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXSpreadAttribute",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "infoProps",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 416,
                    "end": 425
                  },
                  "start": 412,
                  "end": 426
                }
              ],
              "selfClosing": true,
              "start": 406,
              "end": 429
            },
            "children": [],
            "closingElement": null,
            "start": 406,
            "end": 429
          },
          "definite": false,
          "start": 402,
          "end": 429
        }
      ],
      "declare": false,
      "start": 396,
      "end": 430
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 42,
  "end": 430
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 42,
    "end": 48
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 49,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 55,
    "end": 59
  },
  {
    "type": "String",
    "value": "\"react\"",
    "start": 60,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 67,
    "end": 68
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 70,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "InfoProps",
    "start": 75,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 85,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 87,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 89,
    "end": 90
  },
  {
    "type": "Identifier",
    "value": "status",
    "start": 91,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 97,
    "end": 98
  },
  {
    "type": "String",
    "value": "\"hidden\"",
    "start": 99,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 108,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 110,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 112,
    "end": 113
  },
  {
    "type": "Identifier",
    "value": "status",
    "start": 114,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 120,
    "end": 121
  },
  {
    "type": "String",
    "value": "\"visible\"",
    "start": 122,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 131,
    "end": 132
  },
  {
    "type": "Identifier",
    "value": "content",
    "start": 133,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 140,
    "end": 141
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 142,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 149,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 150,
    "end": 151
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 153,
    "end": 158
  },
  {
    "type": "Identifier",
    "value": "Info",
    "start": 159,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 164,
    "end": 165
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
    "value": ":",
    "start": 172,
    "end": 173
  },
  {
    "type": "Identifier",
    "value": "InfoProps",
    "start": 174,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 183,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 185,
    "end": 187
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 188,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 193,
    "end": 194
  },
  {
    "type": "Identifier",
    "value": "status",
    "start": 194,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 201,
    "end": 204
  },
  {
    "type": "String",
    "value": "\"hidden\"",
    "start": 205,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 216,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 218,
    "end": 219
  },
  {
    "type": "JSXIdentifier",
    "value": "noscript",
    "start": 219,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 228,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 229,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 233,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 235,
    "end": 236
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 236,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 239,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 240,
    "end": 241
  },
  {
    "type": "JSXIdentifier",
    "value": "props",
    "start": 241,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 246,
    "end": 247
  },
  {
    "type": "JSXIdentifier",
    "value": "content",
    "start": 247,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 254,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 255,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 256,
    "end": 257
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 257,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 260,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 261,
    "end": 262
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 264,
    "end": 269
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 270,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 272,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 274,
    "end": 275
  },
  {
    "type": "JSXIdentifier",
    "value": "Info",
    "start": 275,
    "end": 279
  },
  {
    "type": "JSXIdentifier",
    "value": "status",
    "start": 280,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 286,
    "end": 287
  },
  {
    "type": "JSXText",
    "value": "\"hidden\"",
    "start": 287,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 296,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 297,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 298,
    "end": 299
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 300,
    "end": 305
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 306,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 308,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 310,
    "end": 311
  },
  {
    "type": "JSXIdentifier",
    "value": "Info",
    "start": 311,
    "end": 315
  },
  {
    "type": "JSXIdentifier",
    "value": "status",
    "start": 316,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 322,
    "end": 323
  },
  {
    "type": "JSXText",
    "value": "\"visible\"",
    "start": 323,
    "end": 332
  },
  {
    "type": "JSXIdentifier",
    "value": "content",
    "start": 333,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 340,
    "end": 341
  },
  {
    "type": "JSXText",
    "value": "\"hello world\"",
    "start": 341,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 355,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 356,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 357,
    "end": 358
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 359,
    "end": 366
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 367,
    "end": 372
  },
  {
    "type": "Identifier",
    "value": "infoProps",
    "start": 373,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 382,
    "end": 383
  },
  {
    "type": "Identifier",
    "value": "InfoProps",
    "start": 384,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 393,
    "end": 394
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 396,
    "end": 401
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 402,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 404,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 406,
    "end": 407
  },
  {
    "type": "JSXIdentifier",
    "value": "Info",
    "start": 407,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 412,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 413,
    "end": 416
  },
  {
    "type": "Identifier",
    "value": "infoProps",
    "start": 416,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 425,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 427,
    "end": 428
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 428,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 429,
    "end": 430
  }
]
```
