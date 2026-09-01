__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "texts",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSStringKeyword",
                    "start": 20,
                    "end": 26
                  },
                  "start": 20,
                  "end": 28
                },
                "start": 18,
                "end": 28
              },
              "start": 13,
              "end": 28
            },
            "init": {
              "type": "ArrayExpression",
              "elements": [],
              "start": 31,
              "end": 33
            },
            "definite": false,
            "start": 13,
            "end": 33
          }
        ],
        "declare": false,
        "start": 7,
        "end": 34
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 34
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "texts",
            "optional": false,
            "typeAnnotation": null,
            "start": 55,
            "end": 60
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "push",
            "optional": false,
            "typeAnnotation": null,
            "start": 61,
            "end": 65
          },
          "optional": false,
          "computed": false,
          "start": 55,
          "end": 65
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 100,
            "raw": "100",
            "start": 66,
            "end": 69
          }
        ],
        "optional": false,
        "start": 55,
        "end": 70
      },
      "directive": null,
      "start": 55,
      "end": 71
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "texts",
            "optional": false,
            "typeAnnotation": null,
            "start": 98,
            "end": 103
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "push",
            "optional": false,
            "typeAnnotation": null,
            "start": 104,
            "end": 108
          },
          "optional": false,
          "computed": false,
          "start": 98,
          "end": 108
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 100,
            "raw": "100",
            "start": 109,
            "end": 112
          }
        ],
        "optional": false,
        "start": 98,
        "end": 113
      },
      "directive": null,
      "start": 98,
      "end": 114
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "texts",
            "optional": false,
            "typeAnnotation": null,
            "start": 141,
            "end": 146
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "push",
            "optional": false,
            "typeAnnotation": null,
            "start": 147,
            "end": 151
          },
          "optional": false,
          "computed": false,
          "start": 141,
          "end": 151
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "100",
            "raw": "\"100\"",
            "start": 152,
            "end": 157
          }
        ],
        "optional": false,
        "start": 141,
        "end": 158
      },
      "directive": null,
      "start": 141,
      "end": 159
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 160
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 0,
    "end": 6
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 7,
    "end": 12
  },
  {
    "type": "Identifier",
    "value": "texts",
    "start": 13,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 18,
    "end": 19
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 20,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 26,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 27,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 29,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 31,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 32,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 33,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "texts",
    "start": 55,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 60,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "push",
    "start": 61,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 65,
    "end": 66
  },
  {
    "type": "Numeric",
    "value": "100",
    "start": 66,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 69,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 70,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "texts",
    "start": 98,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 103,
    "end": 104
  },
  {
    "type": "Identifier",
    "value": "push",
    "start": 104,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 108,
    "end": 109
  },
  {
    "type": "Numeric",
    "value": "100",
    "start": 109,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 112,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 113,
    "end": 114
  },
  {
    "type": "Identifier",
    "value": "texts",
    "start": 141,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 146,
    "end": 147
  },
  {
    "type": "Identifier",
    "value": "push",
    "start": 147,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 151,
    "end": 152
  },
  {
    "type": "String",
    "value": "\"100\"",
    "start": 152,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 157,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 158,
    "end": 159
  }
]
```
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
            "start": 54,
            "end": 59
          },
          "start": 49,
          "end": 59
        }
      ],
      "source": {
        "type": "Literal",
        "value": "react",
        "raw": "\"react\"",
        "start": 65,
        "end": 72
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 42,
      "end": 73
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "MyComponent",
          "optional": false,
          "typeAnnotation": null,
          "start": 91,
          "end": 102
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
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 112,
                      "end": 115
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 117,
                        "end": 123
                      },
                      "start": 115,
                      "end": 123
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 112,
                    "end": 123
                  }
                ],
                "start": 110,
                "end": 125
              },
              "start": 108,
              "end": 125
            },
            "start": 103,
            "end": 125
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
                    "start": 139,
                    "end": 142
                  },
                  "typeArguments": null,
                  "attributes": [],
                  "selfClosing": true,
                  "start": 138,
                  "end": 145
                },
                "children": [],
                "closingElement": null,
                "start": 138,
                "end": 145
              },
              "start": 131,
              "end": 146
            }
          ],
          "start": 127,
          "end": 148
        },
        "expression": false,
        "start": 82,
        "end": 148
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 75,
      "end": 148
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
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 154,
            "end": 155
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 163,
                "end": 166
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": false,
              "start": 162,
              "end": 167
            },
            "children": [
              {
                "type": "JSXText",
                "value": "\n    ",
                "raw": "\n    ",
                "start": 167,
                "end": 172
              },
              {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "JSXEmptyExpression",
                  "start": 173,
                  "end": 192
                },
                "start": 172,
                "end": 193
              },
              {
                "type": "JSXText",
                "value": "\n    ",
                "raw": "\n    ",
                "start": 193,
                "end": 198
              },
              {
                "type": "JSXElement",
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "MyComponent",
                    "start": 199,
                    "end": 210
                  },
                  "typeArguments": null,
                  "attributes": [
                    {
                      "type": "JSXAttribute",
                      "name": {
                        "type": "JSXIdentifier",
                        "name": "foo",
                        "start": 211,
                        "end": 214
                      },
                      "value": {
                        "type": "JSXExpressionContainer",
                        "expression": {
                          "type": "Literal",
                          "value": 100,
                          "raw": "100",
                          "start": 216,
                          "end": 219
                        },
                        "start": 215,
                        "end": 220
                      },
                      "start": 211,
                      "end": 220
                    }
                  ],
                  "selfClosing": true,
                  "start": 198,
                  "end": 223
                },
                "children": [],
                "closingElement": null,
                "start": 198,
                "end": 223
              },
              {
                "type": "JSXText",
                "value": "\n\n    ",
                "raw": "\n\n    ",
                "start": 223,
                "end": 229
              },
              {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "JSXEmptyExpression",
                  "start": 230,
                  "end": 244
                },
                "start": 229,
                "end": 245
              },
              {
                "type": "JSXText",
                "value": "\n    ",
                "raw": "\n    ",
                "start": 245,
                "end": 250
              },
              {
                "type": "JSXElement",
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "MyComponent",
                    "start": 251,
                    "end": 262
                  },
                  "typeArguments": null,
                  "attributes": [
                    {
                      "type": "JSXAttribute",
                      "name": {
                        "type": "JSXIdentifier",
                        "name": "foo",
                        "start": 263,
                        "end": 266
                      },
                      "value": {
                        "type": "JSXExpressionContainer",
                        "expression": {
                          "type": "Literal",
                          "value": 100,
                          "raw": "100",
                          "start": 268,
                          "end": 271
                        },
                        "start": 267,
                        "end": 272
                      },
                      "start": 263,
                      "end": 272
                    }
                  ],
                  "selfClosing": true,
                  "start": 250,
                  "end": 275
                },
                "children": [],
                "closingElement": null,
                "start": 250,
                "end": 275
              },
              {
                "type": "JSXText",
                "value": "\n\n    ",
                "raw": "\n\n    ",
                "start": 275,
                "end": 281
              },
              {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "JSXEmptyExpression",
                  "start": 282,
                  "end": 307
                },
                "start": 281,
                "end": 308
              },
              {
                "type": "JSXText",
                "value": "\n    ",
                "raw": "\n    ",
                "start": 308,
                "end": 313
              },
              {
                "type": "JSXElement",
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "MyComponent",
                    "start": 314,
                    "end": 325
                  },
                  "typeArguments": null,
                  "attributes": [
                    {
                      "type": "JSXAttribute",
                      "name": {
                        "type": "JSXIdentifier",
                        "name": "foo",
                        "start": 326,
                        "end": 329
                      },
                      "value": {
                        "type": "JSXExpressionContainer",
                        "expression": {
                          "type": "Literal",
                          "value": 100,
                          "raw": "100",
                          "start": 331,
                          "end": 334
                        },
                        "start": 330,
                        "end": 335
                      },
                      "start": 326,
                      "end": 335
                    }
                  ],
                  "selfClosing": true,
                  "start": 313,
                  "end": 338
                },
                "children": [],
                "closingElement": null,
                "start": 313,
                "end": 338
              },
              {
                "type": "JSXText",
                "value": "\n\n    ",
                "raw": "\n\n    ",
                "start": 338,
                "end": 344
              },
              {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "JSXEmptyExpression",
                  "start": 345,
                  "end": 373
                },
                "start": 344,
                "end": 374
              },
              {
                "type": "JSXText",
                "value": "\n    ",
                "raw": "\n    ",
                "start": 374,
                "end": 379
              },
              {
                "type": "JSXElement",
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "MyComponent",
                    "start": 380,
                    "end": 391
                  },
                  "typeArguments": null,
                  "attributes": [
                    {
                      "type": "JSXAttribute",
                      "name": {
                        "type": "JSXIdentifier",
                        "name": "foo",
                        "start": 392,
                        "end": 395
                      },
                      "value": {
                        "type": "JSXExpressionContainer",
                        "expression": {
                          "type": "Literal",
                          "value": 100,
                          "raw": "100",
                          "start": 397,
                          "end": 400
                        },
                        "start": 396,
                        "end": 401
                      },
                      "start": 392,
                      "end": 401
                    }
                  ],
                  "selfClosing": true,
                  "start": 379,
                  "end": 404
                },
                "children": [],
                "closingElement": null,
                "start": 379,
                "end": 404
              },
              {
                "type": "JSXText",
                "value": "\n\n    ",
                "raw": "\n\n    ",
                "start": 404,
                "end": 410
              },
              {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "JSXEmptyExpression",
                  "start": 411,
                  "end": 438
                },
                "start": 410,
                "end": 439
              },
              {
                "type": "JSXText",
                "value": "\n    ",
                "raw": "\n    ",
                "start": 439,
                "end": 444
              },
              {
                "type": "JSXElement",
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "MyComponent",
                    "start": 445,
                    "end": 456
                  },
                  "typeArguments": null,
                  "attributes": [
                    {
                      "type": "JSXAttribute",
                      "name": {
                        "type": "JSXIdentifier",
                        "name": "foo",
                        "start": 457,
                        "end": 460
                      },
                      "value": {
                        "type": "JSXExpressionContainer",
                        "expression": {
                          "type": "Literal",
                          "value": 100,
                          "raw": "100",
                          "start": 462,
                          "end": 465
                        },
                        "start": 461,
                        "end": 466
                      },
                      "start": 457,
                      "end": 466
                    }
                  ],
                  "selfClosing": true,
                  "start": 444,
                  "end": 469
                },
                "children": [],
                "closingElement": null,
                "start": 444,
                "end": 469
              },
              {
                "type": "JSXText",
                "value": "\n\n    ",
                "raw": "\n\n    ",
                "start": 469,
                "end": 475
              },
              {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "JSXEmptyExpression",
                  "start": 476,
                  "end": 496
                },
                "start": 475,
                "end": 497
              },
              {
                "type": "JSXText",
                "value": "\n    ",
                "raw": "\n    ",
                "start": 497,
                "end": 502
              },
              {
                "type": "JSXElement",
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "MyComponent",
                    "start": 503,
                    "end": 514
                  },
                  "typeArguments": null,
                  "attributes": [
                    {
                      "type": "JSXAttribute",
                      "name": {
                        "type": "JSXIdentifier",
                        "name": "foo",
                        "start": 515,
                        "end": 518
                      },
                      "value": {
                        "type": "JSXExpressionContainer",
                        "expression": {
                          "type": "Literal",
                          "value": 100,
                          "raw": "100",
                          "start": 520,
                          "end": 523
                        },
                        "start": 519,
                        "end": 524
                      },
                      "start": 515,
                      "end": 524
                    }
                  ],
                  "selfClosing": true,
                  "start": 502,
                  "end": 527
                },
                "children": [],
                "closingElement": null,
                "start": 502,
                "end": 527
              },
              {
                "type": "JSXText",
                "value": "\n\n    ",
                "raw": "\n\n    ",
                "start": 527,
                "end": 533
              },
              {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "JSXEmptyExpression",
                  "start": 534,
                  "end": 559
                },
                "start": 533,
                "end": 560
              },
              {
                "type": "JSXText",
                "value": "\n    ",
                "raw": "\n    ",
                "start": 560,
                "end": 565
              },
              {
                "type": "JSXElement",
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "MyComponent",
                    "start": 566,
                    "end": 577
                  },
                  "typeArguments": null,
                  "attributes": [
                    {
                      "type": "JSXAttribute",
                      "name": {
                        "type": "JSXIdentifier",
                        "name": "foo",
                        "start": 578,
                        "end": 581
                      },
                      "value": {
                        "type": "JSXExpressionContainer",
                        "expression": {
                          "type": "Literal",
                          "value": "hooray",
                          "raw": "\"hooray\"",
                          "start": 583,
                          "end": 591
                        },
                        "start": 582,
                        "end": 592
                      },
                      "start": 578,
                      "end": 592
                    }
                  ],
                  "selfClosing": true,
                  "start": 565,
                  "end": 595
                },
                "children": [],
                "closingElement": null,
                "start": 565,
                "end": 595
              },
              {
                "type": "JSXText",
                "value": "\n  ",
                "raw": "\n  ",
                "start": 595,
                "end": 598
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "div",
                "start": 600,
                "end": 603
              },
              "start": 598,
              "end": 604
            },
            "start": 162,
            "end": 604
          },
          "definite": false,
          "start": 154,
          "end": 606
        }
      ],
      "declare": false,
      "start": 150,
      "end": 607
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 42,
  "end": 607
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
    "type": "Punctuator",
    "value": "*",
    "start": 49,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 51,
    "end": 53
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 54,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 60,
    "end": 64
  },
  {
    "type": "String",
    "value": "\"react\"",
    "start": 65,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 72,
    "end": 73
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 75,
    "end": 81
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 82,
    "end": 90
  },
  {
    "type": "Identifier",
    "value": "MyComponent",
    "start": 91,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 102,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 103,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 108,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 110,
    "end": 111
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 112,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 115,
    "end": 116
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 117,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 124,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 125,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 127,
    "end": 128
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 131,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 138,
    "end": 139
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 139,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 143,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 144,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 145,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 147,
    "end": 148
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 150,
    "end": 153
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 154,
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
    "value": "(",
    "start": 158,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 162,
    "end": 163
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 163,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 166,
    "end": 167
  },
  {
    "type": "JSXText",
    "value": "\n    ",
    "start": 167,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 172,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 192,
    "end": 193
  },
  {
    "type": "JSXText",
    "value": "\n    ",
    "start": 193,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 198,
    "end": 199
  },
  {
    "type": "JSXIdentifier",
    "value": "MyComponent",
    "start": 199,
    "end": 210
  },
  {
    "type": "JSXIdentifier",
    "value": "foo",
    "start": 211,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 214,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 215,
    "end": 216
  },
  {
    "type": "Numeric",
    "value": "100",
    "start": 216,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 219,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 221,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 222,
    "end": 223
  },
  {
    "type": "JSXText",
    "value": "\n\n    ",
    "start": 223,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 229,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 244,
    "end": 245
  },
  {
    "type": "JSXText",
    "value": "\n    ",
    "start": 245,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 250,
    "end": 251
  },
  {
    "type": "JSXIdentifier",
    "value": "MyComponent",
    "start": 251,
    "end": 262
  },
  {
    "type": "JSXIdentifier",
    "value": "foo",
    "start": 263,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 266,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 267,
    "end": 268
  },
  {
    "type": "Numeric",
    "value": "100",
    "start": 268,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 271,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 273,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 274,
    "end": 275
  },
  {
    "type": "JSXText",
    "value": "\n\n    ",
    "start": 275,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 281,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 307,
    "end": 308
  },
  {
    "type": "JSXText",
    "value": "\n    ",
    "start": 308,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 313,
    "end": 314
  },
  {
    "type": "JSXIdentifier",
    "value": "MyComponent",
    "start": 314,
    "end": 325
  },
  {
    "type": "JSXIdentifier",
    "value": "foo",
    "start": 326,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 329,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 330,
    "end": 331
  },
  {
    "type": "Numeric",
    "value": "100",
    "start": 331,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 334,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 336,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 337,
    "end": 338
  },
  {
    "type": "JSXText",
    "value": "\n\n    ",
    "start": 338,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 344,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 373,
    "end": 374
  },
  {
    "type": "JSXText",
    "value": "\n    ",
    "start": 374,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 379,
    "end": 380
  },
  {
    "type": "JSXIdentifier",
    "value": "MyComponent",
    "start": 380,
    "end": 391
  },
  {
    "type": "JSXIdentifier",
    "value": "foo",
    "start": 392,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 395,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 396,
    "end": 397
  },
  {
    "type": "Numeric",
    "value": "100",
    "start": 397,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 400,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 402,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 403,
    "end": 404
  },
  {
    "type": "JSXText",
    "value": "\n\n    ",
    "start": 404,
    "end": 410
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 410,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 438,
    "end": 439
  },
  {
    "type": "JSXText",
    "value": "\n    ",
    "start": 439,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 444,
    "end": 445
  },
  {
    "type": "JSXIdentifier",
    "value": "MyComponent",
    "start": 445,
    "end": 456
  },
  {
    "type": "JSXIdentifier",
    "value": "foo",
    "start": 457,
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
    "value": "100",
    "start": 462,
    "end": 465
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 465,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 467,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 468,
    "end": 469
  },
  {
    "type": "JSXText",
    "value": "\n\n    ",
    "start": 469,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 475,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 496,
    "end": 497
  },
  {
    "type": "JSXText",
    "value": "\n    ",
    "start": 497,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 502,
    "end": 503
  },
  {
    "type": "JSXIdentifier",
    "value": "MyComponent",
    "start": 503,
    "end": 514
  },
  {
    "type": "JSXIdentifier",
    "value": "foo",
    "start": 515,
    "end": 518
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 518,
    "end": 519
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 519,
    "end": 520
  },
  {
    "type": "Numeric",
    "value": "100",
    "start": 520,
    "end": 523
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 523,
    "end": 524
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 525,
    "end": 526
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 526,
    "end": 527
  },
  {
    "type": "JSXText",
    "value": "\n\n    ",
    "start": 527,
    "end": 533
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 533,
    "end": 534
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 559,
    "end": 560
  },
  {
    "type": "JSXText",
    "value": "\n    ",
    "start": 560,
    "end": 565
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 565,
    "end": 566
  },
  {
    "type": "JSXIdentifier",
    "value": "MyComponent",
    "start": 566,
    "end": 577
  },
  {
    "type": "JSXIdentifier",
    "value": "foo",
    "start": 578,
    "end": 581
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 581,
    "end": 582
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 582,
    "end": 583
  },
  {
    "type": "String",
    "value": "\"hooray\"",
    "start": 583,
    "end": 591
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 591,
    "end": 592
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 593,
    "end": 594
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 594,
    "end": 595
  },
  {
    "type": "JSXText",
    "value": "\n  ",
    "start": 595,
    "end": 598
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 598,
    "end": 599
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 599,
    "end": 600
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 600,
    "end": 603
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 603,
    "end": 604
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 605,
    "end": 606
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 606,
    "end": 607
  }
]
```
