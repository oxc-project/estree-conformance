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
              "body": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "div",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 80,
                    "end": 83
                  },
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
                            "name": "text",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 90,
                            "end": 94
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 97,
                              "end": 103
                            },
                            "start": 95,
                            "end": 103
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 90,
                          "end": 104
                        },
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": true,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "width",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 108,
                            "end": 113
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 116,
                              "end": 122
                            },
                            "start": 114,
                            "end": 122
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 108,
                          "end": 123
                        }
                      ],
                      "start": 85,
                      "end": 127
                    },
                    "start": 83,
                    "end": 127
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 80,
                  "end": 127
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "span",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 131,
                    "end": 135
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 137,
                      "end": 140
                    },
                    "start": 135,
                    "end": 140
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 131,
                  "end": 141
                }
              ],
              "start": 76,
              "end": 144
            },
            "declare": false,
            "start": 48,
            "end": 144
          }
        ],
        "start": 22,
        "end": 146
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 146
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "div",
            "start": 194,
            "end": 197
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "text",
                "start": 198,
                "end": 202
              },
              "value": {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "Literal",
                  "value": 42,
                  "raw": "42",
                  "start": 204,
                  "end": 206
                },
                "start": 203,
                "end": 207
              },
              "start": 198,
              "end": 207
            }
          ],
          "selfClosing": true,
          "start": 193,
          "end": 210
        },
        "children": [],
        "closingElement": null,
        "start": 193,
        "end": 210
      },
      "directive": null,
      "start": 193,
      "end": 211
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "div",
            "start": 259,
            "end": 262
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "width",
                "start": 263,
                "end": 268
              },
              "value": {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "Literal",
                  "value": "foo",
                  "raw": "'foo'",
                  "start": 270,
                  "end": 275
                },
                "start": 269,
                "end": 276
              },
              "start": 263,
              "end": 276
            }
          ],
          "selfClosing": true,
          "start": 258,
          "end": 279
        },
        "children": [],
        "closingElement": null,
        "start": 258,
        "end": 279
      },
      "directive": null,
      "start": 258,
      "end": 280
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
            "name": "attribs",
            "optional": false,
            "typeAnnotation": null,
            "start": 331,
            "end": 338
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
                  "name": "text",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 343,
                  "end": 347
                },
                "value": {
                  "type": "Literal",
                  "value": 100,
                  "raw": "100",
                  "start": 349,
                  "end": 352
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 343,
                "end": 352
              }
            ],
            "start": 341,
            "end": 354
          },
          "definite": false,
          "start": 331,
          "end": 354
        }
      ],
      "declare": false,
      "start": 327,
      "end": 355
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "div",
            "start": 357,
            "end": 360
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXSpreadAttribute",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "attribs",
                "optional": false,
                "typeAnnotation": null,
                "start": 365,
                "end": 372
              },
              "start": 361,
              "end": 373
            }
          ],
          "selfClosing": true,
          "start": 356,
          "end": 376
        },
        "children": [],
        "closingElement": null,
        "start": 356,
        "end": 376
      },
      "directive": null,
      "start": 356,
      "end": 377
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "span",
            "start": 398,
            "end": 402
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "foo",
                "start": 403,
                "end": 406
              },
              "value": {
                "type": "Literal",
                "value": "bar",
                "raw": "'bar'",
                "start": 407,
                "end": 412
              },
              "start": 403,
              "end": 412
            },
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "bar",
                "start": 413,
                "end": 416
              },
              "value": {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "Literal",
                  "value": "foo",
                  "raw": "'foo'",
                  "start": 418,
                  "end": 423
                },
                "start": 417,
                "end": 424
              },
              "start": 413,
              "end": 424
            }
          ],
          "selfClosing": true,
          "start": 397,
          "end": 427
        },
        "children": [],
        "closingElement": null,
        "start": 397,
        "end": 427
      },
      "directive": null,
      "start": 397,
      "end": 428
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 428
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
    "type": "Identifier",
    "value": "div",
    "start": 80,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 83,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 85,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "text",
    "start": 90,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 94,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 95,
    "end": 96
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 97,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 103,
    "end": 104
  },
  {
    "type": "Identifier",
    "value": "width",
    "start": 108,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 113,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 114,
    "end": 115
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 116,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 122,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 126,
    "end": 127
  },
  {
    "type": "Identifier",
    "value": "span",
    "start": 131,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 135,
    "end": 136
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 137,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 140,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 143,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 145,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 193,
    "end": 194
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 194,
    "end": 197
  },
  {
    "type": "JSXIdentifier",
    "value": "text",
    "start": 198,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 202,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 203,
    "end": 204
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 204,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 206,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 208,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 209,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 210,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 258,
    "end": 259
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 259,
    "end": 262
  },
  {
    "type": "JSXIdentifier",
    "value": "width",
    "start": 263,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 268,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 269,
    "end": 270
  },
  {
    "type": "String",
    "value": "'foo'",
    "start": 270,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 275,
    "end": 276
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
    "type": "Punctuator",
    "value": ";",
    "start": 279,
    "end": 280
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 327,
    "end": 330
  },
  {
    "type": "Identifier",
    "value": "attribs",
    "start": 331,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 339,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 341,
    "end": 342
  },
  {
    "type": "Identifier",
    "value": "text",
    "start": 343,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 347,
    "end": 348
  },
  {
    "type": "Numeric",
    "value": "100",
    "start": 349,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 353,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 354,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 356,
    "end": 357
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 357,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 361,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 362,
    "end": 365
  },
  {
    "type": "Identifier",
    "value": "attribs",
    "start": 365,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 372,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 374,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 375,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 376,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 397,
    "end": 398
  },
  {
    "type": "JSXIdentifier",
    "value": "span",
    "start": 398,
    "end": 402
  },
  {
    "type": "JSXIdentifier",
    "value": "foo",
    "start": 403,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 406,
    "end": 407
  },
  {
    "type": "JSXText",
    "value": "'bar'",
    "start": 407,
    "end": 412
  },
  {
    "type": "JSXIdentifier",
    "value": "bar",
    "start": 413,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 416,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 417,
    "end": 418
  },
  {
    "type": "String",
    "value": "'foo'",
    "start": 418,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 423,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 425,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 426,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 427,
    "end": 428
  }
]
```
