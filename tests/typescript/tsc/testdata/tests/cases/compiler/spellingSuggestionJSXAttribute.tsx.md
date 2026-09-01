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
            "start": 56,
            "end": 61
          },
          "start": 51,
          "end": 61
        }
      ],
      "source": {
        "type": "Literal",
        "value": "react",
        "raw": "\"react\"",
        "start": 67,
        "end": 74
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 44,
      "end": 75
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyComp2",
        "optional": false,
        "typeAnnotation": null,
        "start": 86,
        "end": 93
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
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "className",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 103,
                    "end": 112
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 115,
                      "end": 121
                    },
                    "start": 113,
                    "end": 121
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 103,
                  "end": 122
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "htmlFor",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 123,
                    "end": 130
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 133,
                      "end": 139
                    },
                    "start": 131,
                    "end": 139
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 123,
                  "end": 139
                }
              ],
              "start": 101,
              "end": 141
            },
            "start": 99,
            "end": 141
          },
          "start": 94,
          "end": 141
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "TSNonNullExpression",
              "expression": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 156,
                "end": 160
              },
              "start": 156,
              "end": 161
            },
            "start": 149,
            "end": 162
          }
        ],
        "start": 143,
        "end": 164
      },
      "expression": false,
      "start": 77,
      "end": 164
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyComp",
        "optional": false,
        "typeAnnotation": null,
        "start": 171,
        "end": 177
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
          "start": 186,
          "end": 191
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "Component",
          "optional": false,
          "typeAnnotation": null,
          "start": 192,
          "end": 201
        },
        "optional": false,
        "computed": false,
        "start": 186,
        "end": 201
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "params": [
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": true,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "className",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 204,
                  "end": 213
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 216,
                    "end": 222
                  },
                  "start": 214,
                  "end": 222
                },
                "accessibility": null,
                "static": false,
                "start": 204,
                "end": 223
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": true,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "htmlFor",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 224,
                  "end": 231
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 234,
                    "end": 240
                  },
                  "start": 232,
                  "end": 240
                },
                "accessibility": null,
                "static": false,
                "start": 224,
                "end": 240
              }
            ],
            "start": 202,
            "end": 242
          }
        ],
        "start": 201,
        "end": 243
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 244,
        "end": 247
      },
      "abstract": false,
      "declare": false,
      "start": 165,
      "end": 247
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "a",
            "start": 249,
            "end": 250
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "class",
                "start": 251,
                "end": 256
              },
              "value": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 257,
                "end": 259
              },
              "start": 251,
              "end": 259
            }
          ],
          "selfClosing": true,
          "start": 248,
          "end": 262
        },
        "children": [],
        "closingElement": null,
        "start": 248,
        "end": 262
      },
      "directive": null,
      "start": 248,
      "end": 263
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "a",
            "start": 265,
            "end": 266
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "for",
                "start": 267,
                "end": 270
              },
              "value": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 271,
                "end": 273
              },
              "start": 267,
              "end": 273
            }
          ],
          "selfClosing": true,
          "start": 264,
          "end": 276
        },
        "children": [],
        "closingElement": null,
        "start": 264,
        "end": 276
      },
      "directive": null,
      "start": 264,
      "end": 277
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "label",
            "start": 301,
            "end": 306
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "for",
                "start": 307,
                "end": 310
              },
              "value": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 311,
                "end": 313
              },
              "start": 307,
              "end": 313
            }
          ],
          "selfClosing": true,
          "start": 300,
          "end": 316
        },
        "children": [],
        "closingElement": null,
        "start": 300,
        "end": 316
      },
      "directive": null,
      "start": 300,
      "end": 317
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "label",
            "start": 319,
            "end": 324
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "for",
                "start": 325,
                "end": 328
              },
              "value": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 329,
                "end": 331
              },
              "start": 325,
              "end": 331
            },
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "class",
                "start": 332,
                "end": 337
              },
              "value": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 338,
                "end": 340
              },
              "start": 332,
              "end": 340
            }
          ],
          "selfClosing": true,
          "start": 318,
          "end": 343
        },
        "children": [],
        "closingElement": null,
        "start": 318,
        "end": 343
      },
      "directive": null,
      "start": 318,
      "end": 344
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "MyComp",
            "start": 346,
            "end": 352
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "class",
                "start": 353,
                "end": 358
              },
              "value": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 359,
                "end": 361
              },
              "start": 353,
              "end": 361
            }
          ],
          "selfClosing": true,
          "start": 345,
          "end": 364
        },
        "children": [],
        "closingElement": null,
        "start": 345,
        "end": 364
      },
      "directive": null,
      "start": 345,
      "end": 365
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "MyComp2",
            "start": 367,
            "end": 374
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "class",
                "start": 375,
                "end": 380
              },
              "value": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 381,
                "end": 383
              },
              "start": 375,
              "end": 383
            }
          ],
          "selfClosing": true,
          "start": 366,
          "end": 386
        },
        "children": [],
        "closingElement": null,
        "start": 366,
        "end": 386
      },
      "directive": null,
      "start": 366,
      "end": 387
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "MyComp",
            "start": 389,
            "end": 395
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "for",
                "start": 396,
                "end": 399
              },
              "value": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 400,
                "end": 402
              },
              "start": 396,
              "end": 402
            }
          ],
          "selfClosing": true,
          "start": 388,
          "end": 405
        },
        "children": [],
        "closingElement": null,
        "start": 388,
        "end": 405
      },
      "directive": null,
      "start": 388,
      "end": 406
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "MyComp2",
            "start": 408,
            "end": 415
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "for",
                "start": 416,
                "end": 419
              },
              "value": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 420,
                "end": 422
              },
              "start": 416,
              "end": 422
            }
          ],
          "selfClosing": true,
          "start": 407,
          "end": 425
        },
        "children": [],
        "closingElement": null,
        "start": 407,
        "end": 425
      },
      "directive": null,
      "start": 407,
      "end": 426
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 44,
  "end": 426
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 44,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 51,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 53,
    "end": 55
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 56,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 62,
    "end": 66
  },
  {
    "type": "String",
    "value": "\"react\"",
    "start": 67,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 74,
    "end": 75
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 77,
    "end": 85
  },
  {
    "type": "Identifier",
    "value": "MyComp2",
    "start": 86,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 93,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 94,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 99,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 101,
    "end": 102
  },
  {
    "type": "Identifier",
    "value": "className",
    "start": 103,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 112,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 113,
    "end": 114
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 115,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 121,
    "end": 122
  },
  {
    "type": "Identifier",
    "value": "htmlFor",
    "start": 123,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 130,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 131,
    "end": 132
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 133,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 140,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 141,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 143,
    "end": 144
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 149,
    "end": 155
  },
  {
    "type": "Null",
    "value": "null",
    "start": 156,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 160,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 161,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 163,
    "end": 164
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 165,
    "end": 170
  },
  {
    "type": "Identifier",
    "value": "MyComp",
    "start": 171,
    "end": 177
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 178,
    "end": 185
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 186,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 191,
    "end": 192
  },
  {
    "type": "Identifier",
    "value": "Component",
    "start": 192,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 201,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 202,
    "end": 203
  },
  {
    "type": "Identifier",
    "value": "className",
    "start": 204,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 213,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 214,
    "end": 215
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 216,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 222,
    "end": 223
  },
  {
    "type": "Identifier",
    "value": "htmlFor",
    "start": 224,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 231,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 232,
    "end": 233
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 234,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 241,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 242,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 244,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 246,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 248,
    "end": 249
  },
  {
    "type": "JSXIdentifier",
    "value": "a",
    "start": 249,
    "end": 250
  },
  {
    "type": "JSXIdentifier",
    "value": "class",
    "start": 251,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 256,
    "end": 257
  },
  {
    "type": "JSXText",
    "value": "\"\"",
    "start": 257,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 260,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 261,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 262,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 264,
    "end": 265
  },
  {
    "type": "JSXIdentifier",
    "value": "a",
    "start": 265,
    "end": 266
  },
  {
    "type": "JSXIdentifier",
    "value": "for",
    "start": 267,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 270,
    "end": 271
  },
  {
    "type": "JSXText",
    "value": "\"\"",
    "start": 271,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 274,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 275,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 276,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 300,
    "end": 301
  },
  {
    "type": "JSXIdentifier",
    "value": "label",
    "start": 301,
    "end": 306
  },
  {
    "type": "JSXIdentifier",
    "value": "for",
    "start": 307,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 310,
    "end": 311
  },
  {
    "type": "JSXText",
    "value": "\"\"",
    "start": 311,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 314,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 315,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 316,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 318,
    "end": 319
  },
  {
    "type": "JSXIdentifier",
    "value": "label",
    "start": 319,
    "end": 324
  },
  {
    "type": "JSXIdentifier",
    "value": "for",
    "start": 325,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 328,
    "end": 329
  },
  {
    "type": "JSXText",
    "value": "\"\"",
    "start": 329,
    "end": 331
  },
  {
    "type": "JSXIdentifier",
    "value": "class",
    "start": 332,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 337,
    "end": 338
  },
  {
    "type": "JSXText",
    "value": "\"\"",
    "start": 338,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 341,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 342,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 343,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 345,
    "end": 346
  },
  {
    "type": "JSXIdentifier",
    "value": "MyComp",
    "start": 346,
    "end": 352
  },
  {
    "type": "JSXIdentifier",
    "value": "class",
    "start": 353,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 358,
    "end": 359
  },
  {
    "type": "JSXText",
    "value": "\"\"",
    "start": 359,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 362,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 363,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 364,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 366,
    "end": 367
  },
  {
    "type": "JSXIdentifier",
    "value": "MyComp2",
    "start": 367,
    "end": 374
  },
  {
    "type": "JSXIdentifier",
    "value": "class",
    "start": 375,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 380,
    "end": 381
  },
  {
    "type": "JSXText",
    "value": "\"\"",
    "start": 381,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 384,
    "end": 385
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 385,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 386,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 388,
    "end": 389
  },
  {
    "type": "JSXIdentifier",
    "value": "MyComp",
    "start": 389,
    "end": 395
  },
  {
    "type": "JSXIdentifier",
    "value": "for",
    "start": 396,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 399,
    "end": 400
  },
  {
    "type": "JSXText",
    "value": "\"\"",
    "start": 400,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 403,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 404,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 405,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 407,
    "end": 408
  },
  {
    "type": "JSXIdentifier",
    "value": "MyComp2",
    "start": 408,
    "end": 415
  },
  {
    "type": "JSXIdentifier",
    "value": "for",
    "start": 416,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 419,
    "end": 420
  },
  {
    "type": "JSXText",
    "value": "\"\"",
    "start": 420,
    "end": 422
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 423,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 424,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 425,
    "end": 426
  }
]
```
