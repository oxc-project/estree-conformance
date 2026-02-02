__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "React",
        "optional": false,
        "typeAnnotation": null,
        "start": 50,
        "end": 55
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "react",
          "raw": "'react'",
          "start": 66,
          "end": 73
        },
        "start": 58,
        "end": 74
      },
      "importKind": "value",
      "start": 43,
      "end": 75
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Prop",
        "optional": false,
        "typeAnnotation": null,
        "start": 87,
        "end": 91
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 98,
              "end": 99
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 101,
                "end": 107
              },
              "start": 99,
              "end": 107
            },
            "accessibility": null,
            "static": false,
            "start": 98,
            "end": 108
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 113,
              "end": 114
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 116,
                "end": 122
              },
              "start": 114,
              "end": 122
            },
            "accessibility": null,
            "static": false,
            "start": 113,
            "end": 123
          },
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
              "start": 128,
              "end": 136
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Button",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 138,
                  "end": 144
                },
                "typeArguments": null,
                "start": 138,
                "end": 144
              },
              "start": 136,
              "end": 144
            },
            "accessibility": null,
            "static": false,
            "start": 128,
            "end": 145
          }
        ],
        "start": 92,
        "end": 147
      },
      "declare": false,
      "start": 77,
      "end": 147
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Button",
        "optional": false,
        "typeAnnotation": null,
        "start": 155,
        "end": 161
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
          "start": 170,
          "end": 175
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "Component",
          "optional": false,
          "typeAnnotation": null,
          "start": 176,
          "end": 185
        },
        "optional": false,
        "computed": false,
        "start": 170,
        "end": 185
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "params": [
          {
            "type": "TSAnyKeyword",
            "start": 186,
            "end": 189
          },
          {
            "type": "TSAnyKeyword",
            "start": 191,
            "end": 194
          }
        ],
        "start": 185,
        "end": 195
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "render",
              "optional": false,
              "typeAnnotation": null,
              "start": 202,
              "end": 208
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
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
                          "name": "div",
                          "start": 230,
                          "end": 233
                        },
                        "typeArguments": null,
                        "attributes": [],
                        "selfClosing": false,
                        "start": 229,
                        "end": 234
                      },
                      "children": [
                        {
                          "type": "JSXText",
                          "value": "My Button",
                          "raw": "My Button",
                          "start": 234,
                          "end": 243
                        }
                      ],
                      "closingElement": {
                        "type": "JSXClosingElement",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "div",
                          "start": 245,
                          "end": 248
                        },
                        "start": 243,
                        "end": 249
                      },
                      "start": 229,
                      "end": 249
                    },
                    "start": 221,
                    "end": 250
                  }
                ],
                "start": 211,
                "end": 256
              },
              "expression": false,
              "start": 208,
              "end": 256
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 202,
            "end": 256
          }
        ],
        "start": 196,
        "end": 258
      },
      "abstract": false,
      "declare": false,
      "start": 149,
      "end": 258
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Comp",
        "optional": false,
        "typeAnnotation": null,
        "start": 269,
        "end": 273
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "p",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Prop",
                "optional": false,
                "typeAnnotation": null,
                "start": 277,
                "end": 281
              },
              "typeArguments": null,
              "start": 277,
              "end": 281
            },
            "start": 275,
            "end": 281
          },
          "start": 274,
          "end": 281
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
                  "name": "div",
                  "start": 297,
                  "end": 300
                },
                "typeArguments": null,
                "attributes": [],
                "selfClosing": false,
                "start": 296,
                "end": 301
              },
              "children": [
                {
                  "type": "JSXExpressionContainer",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "p",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 302,
                      "end": 303
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 304,
                      "end": 305
                    },
                    "optional": false,
                    "computed": false,
                    "start": 302,
                    "end": 305
                  },
                  "start": 301,
                  "end": 306
                }
              ],
              "closingElement": {
                "type": "JSXClosingElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "div",
                  "start": 308,
                  "end": 311
                },
                "start": 306,
                "end": 312
              },
              "start": 296,
              "end": 312
            },
            "start": 289,
            "end": 313
          }
        ],
        "start": 283,
        "end": 315
      },
      "expression": false,
      "start": 260,
      "end": 315
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "k",
            "optional": false,
            "typeAnnotation": null,
            "start": 353,
            "end": 354
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Comp",
                "start": 358,
                "end": 362
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "a",
                    "start": 363,
                    "end": 364
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "value": 10,
                      "raw": "10",
                      "start": 366,
                      "end": 368
                    },
                    "start": 365,
                    "end": 369
                  },
                  "start": 363,
                  "end": 369
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "b",
                    "start": 370,
                    "end": 371
                  },
                  "value": {
                    "type": "Literal",
                    "value": "hi",
                    "raw": "\"hi\"",
                    "start": 372,
                    "end": 376
                  },
                  "start": 370,
                  "end": 376
                }
              ],
              "selfClosing": true,
              "start": 357,
              "end": 379
            },
            "children": [],
            "closingElement": null,
            "start": 357,
            "end": 379
          },
          "definite": false,
          "start": 353,
          "end": 379
        }
      ],
      "declare": false,
      "start": 349,
      "end": 380
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "k1",
            "optional": false,
            "typeAnnotation": null,
            "start": 444,
            "end": 446
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Comp",
                "start": 454,
                "end": 458
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "a",
                    "start": 459,
                    "end": 460
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "value": 10,
                      "raw": "10",
                      "start": 462,
                      "end": 464
                    },
                    "start": 461,
                    "end": 465
                  },
                  "start": 459,
                  "end": 465
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "b",
                    "start": 466,
                    "end": 467
                  },
                  "value": {
                    "type": "Literal",
                    "value": "hi",
                    "raw": "\"hi\"",
                    "start": 468,
                    "end": 472
                  },
                  "start": 466,
                  "end": 472
                }
              ],
              "selfClosing": false,
              "start": 453,
              "end": 473
            },
            "children": [
              {
                "type": "JSXText",
                "value": "\n        ",
                "raw": "\n        ",
                "start": 473,
                "end": 482
              },
              {
                "type": "JSXElement",
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "Button",
                    "start": 483,
                    "end": 489
                  },
                  "typeArguments": null,
                  "attributes": [],
                  "selfClosing": true,
                  "start": 482,
                  "end": 492
                },
                "children": [],
                "closingElement": null,
                "start": 482,
                "end": 492
              },
              {
                "type": "JSXText",
                "value": "\n    ",
                "raw": "\n    ",
                "start": 492,
                "end": 497
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Comp",
                "start": 499,
                "end": 503
              },
              "start": 497,
              "end": 504
            },
            "start": 453,
            "end": 504
          },
          "definite": false,
          "start": 444,
          "end": 504
        }
      ],
      "declare": false,
      "start": 440,
      "end": 505
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "k2",
            "optional": false,
            "typeAnnotation": null,
            "start": 510,
            "end": 512
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Comp",
                "start": 520,
                "end": 524
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "a",
                    "start": 525,
                    "end": 526
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "value": 10,
                      "raw": "10",
                      "start": 528,
                      "end": 530
                    },
                    "start": 527,
                    "end": 531
                  },
                  "start": 525,
                  "end": 531
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "b",
                    "start": 532,
                    "end": 533
                  },
                  "value": {
                    "type": "Literal",
                    "value": "hi",
                    "raw": "\"hi\"",
                    "start": 534,
                    "end": 538
                  },
                  "start": 532,
                  "end": 538
                }
              ],
              "selfClosing": false,
              "start": 519,
              "end": 539
            },
            "children": [
              {
                "type": "JSXText",
                "value": "\n        ",
                "raw": "\n        ",
                "start": 539,
                "end": 548
              },
              {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Button",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 549,
                  "end": 555
                },
                "start": 548,
                "end": 556
              },
              {
                "type": "JSXText",
                "value": "\n    ",
                "raw": "\n    ",
                "start": 556,
                "end": 561
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Comp",
                "start": 563,
                "end": 567
              },
              "start": 561,
              "end": 568
            },
            "start": 519,
            "end": 568
          },
          "definite": false,
          "start": 510,
          "end": 568
        }
      ],
      "declare": false,
      "start": 506,
      "end": 569
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 43,
  "end": 569
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 43,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 50,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 56,
    "end": 57
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 58,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 65,
    "end": 66
  },
  {
    "type": "String",
    "value": "'react'",
    "start": 66,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 73,
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
    "value": "interface",
    "start": 77,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "Prop",
    "start": 87,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 92,
    "end": 93
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 98,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 99,
    "end": 100
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 101,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 107,
    "end": 108
  },
  {
    "type": "Identifier",
    "value": "b",
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
    "value": "string",
    "start": 116,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 122,
    "end": 123
  },
  {
    "type": "Identifier",
    "value": "children",
    "start": 128,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 136,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "Button",
    "start": 138,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 144,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 146,
    "end": 147
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 149,
    "end": 154
  },
  {
    "type": "Identifier",
    "value": "Button",
    "start": 155,
    "end": 161
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 162,
    "end": 169
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 170,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 175,
    "end": 176
  },
  {
    "type": "Identifier",
    "value": "Component",
    "start": 176,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 185,
    "end": 186
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 186,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 189,
    "end": 190
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 191,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 194,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 196,
    "end": 197
  },
  {
    "type": "Identifier",
    "value": "render",
    "start": 202,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 208,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 209,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 211,
    "end": 212
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 221,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 228,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 229,
    "end": 230
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 230,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 233,
    "end": 234
  },
  {
    "type": "JSXText",
    "value": "My Button",
    "start": 234,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 243,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 244,
    "end": 245
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 245,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 248,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 249,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 255,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 257,
    "end": 258
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 260,
    "end": 268
  },
  {
    "type": "Identifier",
    "value": "Comp",
    "start": 269,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 273,
    "end": 274
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 274,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 275,
    "end": 276
  },
  {
    "type": "Identifier",
    "value": "Prop",
    "start": 277,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 281,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 283,
    "end": 284
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 289,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 296,
    "end": 297
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 297,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 300,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 301,
    "end": 302
  },
  {
    "type": "JSXIdentifier",
    "value": "p",
    "start": 302,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 303,
    "end": 304
  },
  {
    "type": "JSXIdentifier",
    "value": "b",
    "start": 304,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 305,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 306,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 307,
    "end": 308
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 308,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 311,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 312,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 314,
    "end": 315
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 349,
    "end": 352
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 353,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 355,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 357,
    "end": 358
  },
  {
    "type": "JSXIdentifier",
    "value": "Comp",
    "start": 358,
    "end": 362
  },
  {
    "type": "JSXIdentifier",
    "value": "a",
    "start": 363,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 364,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 365,
    "end": 366
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 366,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 368,
    "end": 369
  },
  {
    "type": "JSXIdentifier",
    "value": "b",
    "start": 370,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 371,
    "end": 372
  },
  {
    "type": "JSXText",
    "value": "\"hi\"",
    "start": 372,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 377,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 378,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 379,
    "end": 380
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 440,
    "end": 443
  },
  {
    "type": "Identifier",
    "value": "k1",
    "start": 444,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 447,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 453,
    "end": 454
  },
  {
    "type": "JSXIdentifier",
    "value": "Comp",
    "start": 454,
    "end": 458
  },
  {
    "type": "JSXIdentifier",
    "value": "a",
    "start": 459,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 460,
    "end": 461
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 461,
    "end": 462
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 462,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 464,
    "end": 465
  },
  {
    "type": "JSXIdentifier",
    "value": "b",
    "start": 466,
    "end": 467
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 467,
    "end": 468
  },
  {
    "type": "JSXText",
    "value": "\"hi\"",
    "start": 468,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 472,
    "end": 473
  },
  {
    "type": "JSXText",
    "value": "\n        ",
    "start": 473,
    "end": 482
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 482,
    "end": 483
  },
  {
    "type": "JSXIdentifier",
    "value": "Button",
    "start": 483,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 490,
    "end": 491
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 491,
    "end": 492
  },
  {
    "type": "JSXText",
    "value": "\n    ",
    "start": 492,
    "end": 497
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 497,
    "end": 498
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 498,
    "end": 499
  },
  {
    "type": "JSXIdentifier",
    "value": "Comp",
    "start": 499,
    "end": 503
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 503,
    "end": 504
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 504,
    "end": 505
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 506,
    "end": 509
  },
  {
    "type": "Identifier",
    "value": "k2",
    "start": 510,
    "end": 512
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 513,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 519,
    "end": 520
  },
  {
    "type": "JSXIdentifier",
    "value": "Comp",
    "start": 520,
    "end": 524
  },
  {
    "type": "JSXIdentifier",
    "value": "a",
    "start": 525,
    "end": 526
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 526,
    "end": 527
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 527,
    "end": 528
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 528,
    "end": 530
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 530,
    "end": 531
  },
  {
    "type": "JSXIdentifier",
    "value": "b",
    "start": 532,
    "end": 533
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 533,
    "end": 534
  },
  {
    "type": "JSXText",
    "value": "\"hi\"",
    "start": 534,
    "end": 538
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 538,
    "end": 539
  },
  {
    "type": "JSXText",
    "value": "\n        ",
    "start": 539,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 548,
    "end": 549
  },
  {
    "type": "Identifier",
    "value": "Button",
    "start": 549,
    "end": 555
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 555,
    "end": 556
  },
  {
    "type": "JSXText",
    "value": "\n    ",
    "start": 556,
    "end": 561
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 561,
    "end": 562
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 562,
    "end": 563
  },
  {
    "type": "JSXIdentifier",
    "value": "Comp",
    "start": 563,
    "end": 567
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 567,
    "end": 568
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 568,
    "end": 569
  }
]
```
