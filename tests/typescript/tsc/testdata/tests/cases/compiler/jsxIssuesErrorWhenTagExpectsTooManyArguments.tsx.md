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
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyProps",
        "optional": false,
        "typeAnnotation": null,
        "start": 88,
        "end": 95
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 102,
              "end": 103
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 105,
                "end": 111
              },
              "start": 103,
              "end": 111
            },
            "accessibility": null,
            "static": false,
            "start": 102,
            "end": 112
          }
        ],
        "start": 96,
        "end": 114
      },
      "declare": false,
      "start": 78,
      "end": 114
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyComp4",
        "optional": false,
        "typeAnnotation": null,
        "start": 125,
        "end": 132
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "MyProps",
                "optional": false,
                "typeAnnotation": null,
                "start": 140,
                "end": 147
              },
              "typeArguments": null,
              "start": 140,
              "end": 147
            },
            "start": 138,
            "end": 147
          },
          "start": 133,
          "end": 147
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "context",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 158,
              "end": 161
            },
            "start": 156,
            "end": 161
          },
          "start": 149,
          "end": 161
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "bad",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 168,
              "end": 171
            },
            "start": 166,
            "end": 171
          },
          "start": 163,
          "end": 171
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "verybad",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 182,
              "end": 185
            },
            "start": 180,
            "end": 185
          },
          "start": 173,
          "end": 185
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
                  "start": 201,
                  "end": 204
                },
                "typeArguments": null,
                "attributes": [],
                "selfClosing": false,
                "start": 200,
                "end": 205
              },
              "children": [],
              "closingElement": {
                "type": "JSXClosingElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "div",
                  "start": 207,
                  "end": 210
                },
                "start": 205,
                "end": 211
              },
              "start": 200,
              "end": 211
            },
            "start": 193,
            "end": 212
          }
        ],
        "start": 187,
        "end": 214
      },
      "expression": false,
      "start": 116,
      "end": 214
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyComp3",
        "optional": false,
        "typeAnnotation": null,
        "start": 224,
        "end": 231
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "MyProps",
                "optional": false,
                "typeAnnotation": null,
                "start": 239,
                "end": 246
              },
              "typeArguments": null,
              "start": 239,
              "end": 246
            },
            "start": 237,
            "end": 246
          },
          "start": 232,
          "end": 246
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "context",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 257,
              "end": 260
            },
            "start": 255,
            "end": 260
          },
          "start": 248,
          "end": 260
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "bad",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 267,
              "end": 270
            },
            "start": 265,
            "end": 270
          },
          "start": 262,
          "end": 270
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
                  "start": 286,
                  "end": 289
                },
                "typeArguments": null,
                "attributes": [],
                "selfClosing": false,
                "start": 285,
                "end": 290
              },
              "children": [],
              "closingElement": {
                "type": "JSXClosingElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "div",
                  "start": 292,
                  "end": 295
                },
                "start": 290,
                "end": 296
              },
              "start": 285,
              "end": 296
            },
            "start": 278,
            "end": 297
          }
        ],
        "start": 272,
        "end": 299
      },
      "expression": false,
      "start": 215,
      "end": 299
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyComp2",
        "optional": false,
        "typeAnnotation": null,
        "start": 309,
        "end": 316
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "MyProps",
                "optional": false,
                "typeAnnotation": null,
                "start": 324,
                "end": 331
              },
              "typeArguments": null,
              "start": 324,
              "end": 331
            },
            "start": 322,
            "end": 331
          },
          "start": 317,
          "end": 331
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "context",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 342,
              "end": 345
            },
            "start": 340,
            "end": 345
          },
          "start": 333,
          "end": 345
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
                  "start": 361,
                  "end": 364
                },
                "typeArguments": null,
                "attributes": [],
                "selfClosing": false,
                "start": 360,
                "end": 365
              },
              "children": [],
              "closingElement": {
                "type": "JSXClosingElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "div",
                  "start": 367,
                  "end": 370
                },
                "start": 365,
                "end": 371
              },
              "start": 360,
              "end": 371
            },
            "start": 353,
            "end": 371
          }
        ],
        "start": 347,
        "end": 373
      },
      "expression": false,
      "start": 300,
      "end": 373
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
            "start": 381,
            "end": 382
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "MyComp4",
                "start": 386,
                "end": 393
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "x",
                    "start": 394,
                    "end": 395
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 397,
                      "end": 398
                    },
                    "start": 396,
                    "end": 399
                  },
                  "start": 394,
                  "end": 399
                }
              ],
              "selfClosing": true,
              "start": 385,
              "end": 401
            },
            "children": [],
            "closingElement": null,
            "start": 385,
            "end": 401
          },
          "definite": false,
          "start": 381,
          "end": 401
        }
      ],
      "declare": false,
      "start": 375,
      "end": 402
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
            "start": 503,
            "end": 504
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "MyComp3",
                "start": 508,
                "end": 515
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "x",
                    "start": 516,
                    "end": 517
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 519,
                      "end": 520
                    },
                    "start": 518,
                    "end": 521
                  },
                  "start": 516,
                  "end": 521
                }
              ],
              "selfClosing": true,
              "start": 507,
              "end": 523
            },
            "children": [],
            "closingElement": null,
            "start": 507,
            "end": 523
          },
          "definite": false,
          "start": 503,
          "end": 523
        }
      ],
      "declare": false,
      "start": 497,
      "end": 524
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
            "start": 625,
            "end": 626
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "MyComp2",
                "start": 631,
                "end": 638
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "x",
                    "start": 639,
                    "end": 640
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 642,
                      "end": 643
                    },
                    "start": 641,
                    "end": 644
                  },
                  "start": 639,
                  "end": 644
                }
              ],
              "selfClosing": true,
              "start": 630,
              "end": 646
            },
            "children": [],
            "closingElement": null,
            "start": 630,
            "end": 646
          },
          "definite": false,
          "start": 625,
          "end": 646
        }
      ],
      "declare": false,
      "start": 619,
      "end": 647
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyTagWithOptionalNonJSXBits",
        "optional": false,
        "typeAnnotation": null,
        "start": 721,
        "end": 748
      },
      "generator": false,
      "async": false,
      "declare": true,
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
                "name": "MyProps",
                "optional": false,
                "typeAnnotation": null,
                "start": 756,
                "end": 763
              },
              "typeArguments": null,
              "start": 756,
              "end": 763
            },
            "start": 754,
            "end": 763
          },
          "start": 749,
          "end": 763
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "context",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 774,
              "end": 777
            },
            "start": 772,
            "end": 777
          },
          "start": 765,
          "end": 777
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "nonReactArg",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 793,
              "end": 799
            },
            "start": 791,
            "end": 799
          },
          "start": 779,
          "end": 799
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "TSQualifiedName",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "JSX",
              "optional": false,
              "typeAnnotation": null,
              "start": 802,
              "end": 805
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "Element",
              "optional": false,
              "typeAnnotation": null,
              "start": 806,
              "end": 813
            },
            "start": 802,
            "end": 813
          },
          "typeArguments": null,
          "start": 802,
          "end": 813
        },
        "start": 800,
        "end": 813
      },
      "body": null,
      "expression": false,
      "start": 704,
      "end": 814
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
            "name": "d",
            "optional": false,
            "typeAnnotation": null,
            "start": 821,
            "end": 822
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "MyTagWithOptionalNonJSXBits",
                "start": 826,
                "end": 853
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "x",
                    "start": 854,
                    "end": 855
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 857,
                      "end": 858
                    },
                    "start": 856,
                    "end": 859
                  },
                  "start": 854,
                  "end": 859
                }
              ],
              "selfClosing": true,
              "start": 825,
              "end": 862
            },
            "children": [],
            "closingElement": null,
            "start": 825,
            "end": 862
          },
          "definite": false,
          "start": 821,
          "end": 862
        }
      ],
      "declare": false,
      "start": 815,
      "end": 863
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 45,
  "end": 908
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
    "value": "interface",
    "start": 78,
    "end": 87
  },
  {
    "type": "Identifier",
    "value": "MyProps",
    "start": 88,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 96,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 102,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 103,
    "end": 104
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 105,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 111,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 113,
    "end": 114
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 116,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "MyComp4",
    "start": 125,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 132,
    "end": 133
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 133,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 138,
    "end": 139
  },
  {
    "type": "Identifier",
    "value": "MyProps",
    "start": 140,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 147,
    "end": 148
  },
  {
    "type": "Identifier",
    "value": "context",
    "start": 149,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 156,
    "end": 157
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 158,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 161,
    "end": 162
  },
  {
    "type": "Identifier",
    "value": "bad",
    "start": 163,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 166,
    "end": 167
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 168,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 171,
    "end": 172
  },
  {
    "type": "Identifier",
    "value": "verybad",
    "start": 173,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 180,
    "end": 181
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 182,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 185,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 187,
    "end": 188
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 193,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 200,
    "end": 201
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 201,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 204,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 205,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 206,
    "end": 207
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 207,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 210,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 211,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 213,
    "end": 214
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 215,
    "end": 223
  },
  {
    "type": "Identifier",
    "value": "MyComp3",
    "start": 224,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 231,
    "end": 232
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 232,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 237,
    "end": 238
  },
  {
    "type": "Identifier",
    "value": "MyProps",
    "start": 239,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 246,
    "end": 247
  },
  {
    "type": "Identifier",
    "value": "context",
    "start": 248,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 255,
    "end": 256
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 257,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 260,
    "end": 261
  },
  {
    "type": "Identifier",
    "value": "bad",
    "start": 262,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 265,
    "end": 266
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 267,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 270,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 272,
    "end": 273
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 278,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 285,
    "end": 286
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 286,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 289,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 290,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 291,
    "end": 292
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 292,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 295,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 296,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 298,
    "end": 299
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 300,
    "end": 308
  },
  {
    "type": "Identifier",
    "value": "MyComp2",
    "start": 309,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 316,
    "end": 317
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 317,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 322,
    "end": 323
  },
  {
    "type": "Identifier",
    "value": "MyProps",
    "start": 324,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 331,
    "end": 332
  },
  {
    "type": "Identifier",
    "value": "context",
    "start": 333,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 340,
    "end": 341
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 342,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 345,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 347,
    "end": 348
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 353,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 360,
    "end": 361
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 361,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 364,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 365,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 366,
    "end": 367
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 367,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 370,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 372,
    "end": 373
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 375,
    "end": 380
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 381,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 383,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 385,
    "end": 386
  },
  {
    "type": "JSXIdentifier",
    "value": "MyComp4",
    "start": 386,
    "end": 393
  },
  {
    "type": "JSXIdentifier",
    "value": "x",
    "start": 394,
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
    "value": "2",
    "start": 397,
    "end": 398
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 398,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 399,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 400,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 401,
    "end": 402
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 497,
    "end": 502
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 503,
    "end": 504
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 505,
    "end": 506
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 507,
    "end": 508
  },
  {
    "type": "JSXIdentifier",
    "value": "MyComp3",
    "start": 508,
    "end": 515
  },
  {
    "type": "JSXIdentifier",
    "value": "x",
    "start": 516,
    "end": 517
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 517,
    "end": 518
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 518,
    "end": 519
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 519,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 520,
    "end": 521
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 521,
    "end": 522
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 522,
    "end": 523
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 523,
    "end": 524
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 619,
    "end": 624
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 625,
    "end": 626
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 628,
    "end": 629
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 630,
    "end": 631
  },
  {
    "type": "JSXIdentifier",
    "value": "MyComp2",
    "start": 631,
    "end": 638
  },
  {
    "type": "JSXIdentifier",
    "value": "x",
    "start": 639,
    "end": 640
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 640,
    "end": 641
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 641,
    "end": 642
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 642,
    "end": 643
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 643,
    "end": 644
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 644,
    "end": 645
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 645,
    "end": 646
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 646,
    "end": 647
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 704,
    "end": 711
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 712,
    "end": 720
  },
  {
    "type": "Identifier",
    "value": "MyTagWithOptionalNonJSXBits",
    "start": 721,
    "end": 748
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 748,
    "end": 749
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 749,
    "end": 754
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 754,
    "end": 755
  },
  {
    "type": "Identifier",
    "value": "MyProps",
    "start": 756,
    "end": 763
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 763,
    "end": 764
  },
  {
    "type": "Identifier",
    "value": "context",
    "start": 765,
    "end": 772
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 772,
    "end": 773
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 774,
    "end": 777
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 777,
    "end": 778
  },
  {
    "type": "Identifier",
    "value": "nonReactArg",
    "start": 779,
    "end": 790
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 790,
    "end": 791
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 791,
    "end": 792
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 793,
    "end": 799
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 799,
    "end": 800
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 800,
    "end": 801
  },
  {
    "type": "Identifier",
    "value": "JSX",
    "start": 802,
    "end": 805
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 805,
    "end": 806
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 806,
    "end": 813
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 813,
    "end": 814
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 815,
    "end": 820
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 821,
    "end": 822
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 823,
    "end": 824
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 825,
    "end": 826
  },
  {
    "type": "JSXIdentifier",
    "value": "MyTagWithOptionalNonJSXBits",
    "start": 826,
    "end": 853
  },
  {
    "type": "JSXIdentifier",
    "value": "x",
    "start": 854,
    "end": 855
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 855,
    "end": 856
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 856,
    "end": 857
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 857,
    "end": 858
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 858,
    "end": 859
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 860,
    "end": 861
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 861,
    "end": 862
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 862,
    "end": 863
  }
]
```
