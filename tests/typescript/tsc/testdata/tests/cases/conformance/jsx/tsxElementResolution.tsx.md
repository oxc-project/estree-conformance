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
              "name": "IntrinsicElements",
              "optional": false,
              "typeAnnotation": null,
              "start": 35,
              "end": 52
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
                    "name": "foundFirst",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 57,
                    "end": 67
                  },
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
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 71,
                            "end": 72
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 74,
                              "end": 80
                            },
                            "start": 72,
                            "end": 80
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 71,
                          "end": 80
                        }
                      ],
                      "start": 69,
                      "end": 82
                    },
                    "start": 67,
                    "end": 82
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 57,
                  "end": 83
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Literal",
                    "value": "string_named",
                    "raw": "'string_named'",
                    "start": 86,
                    "end": 100
                  },
                  "typeAnnotation": null,
                  "accessibility": null,
                  "static": false,
                  "start": 86,
                  "end": 101
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Literal",
                    "value": "var",
                    "raw": "'var'",
                    "start": 104,
                    "end": 109
                  },
                  "typeAnnotation": null,
                  "accessibility": null,
                  "static": false,
                  "start": 104,
                  "end": 110
                }
              ],
              "start": 53,
              "end": 113
            },
            "declare": false,
            "start": 25,
            "end": 113
          }
        ],
        "start": 22,
        "end": 115
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 115
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foundFirst",
        "optional": false,
        "typeAnnotation": null,
        "start": 123,
        "end": 133
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 134,
        "end": 137
      },
      "abstract": false,
      "declare": false,
      "start": 117,
      "end": 137
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Other",
        "optional": false,
        "typeAnnotation": null,
        "start": 144,
        "end": 149
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 150,
        "end": 152
      },
      "abstract": false,
      "declare": false,
      "start": 138,
      "end": 152
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Dotted",
        "optional": false,
        "typeAnnotation": null,
        "start": 164,
        "end": 170
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Name",
                "optional": false,
                "typeAnnotation": null,
                "start": 187,
                "end": 191
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 192,
                "end": 195
              },
              "abstract": false,
              "declare": false,
              "start": 181,
              "end": 195
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 174,
            "end": 195
          }
        ],
        "start": 171,
        "end": 197
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 154,
      "end": 197
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
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 263,
            "end": 264
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "foundFirst",
                "start": 268,
                "end": 278
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "x",
                    "start": 280,
                    "end": 281
                  },
                  "value": {
                    "type": "Literal",
                    "value": "hello",
                    "raw": "\"hello\"",
                    "start": 282,
                    "end": 289
                  },
                  "start": 280,
                  "end": 289
                }
              ],
              "selfClosing": true,
              "start": 267,
              "end": 292
            },
            "children": [],
            "closingElement": null,
            "start": 267,
            "end": 292
          },
          "definite": false,
          "start": 263,
          "end": 292
        }
      ],
      "declare": false,
      "start": 259,
      "end": 293
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
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 298,
            "end": 299
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "string_named",
                "start": 303,
                "end": 315
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": true,
              "start": 302,
              "end": 318
            },
            "children": [],
            "closingElement": null,
            "start": 302,
            "end": 318
          },
          "definite": false,
          "start": 298,
          "end": 318
        }
      ],
      "declare": false,
      "start": 294,
      "end": 319
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
            "name": "d",
            "optional": false,
            "typeAnnotation": null,
            "start": 448,
            "end": 449
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Other",
                "start": 453,
                "end": 458
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": true,
              "start": 452,
              "end": 461
            },
            "children": [],
            "closingElement": null,
            "start": 452,
            "end": 461
          },
          "definite": false,
          "start": 448,
          "end": 461
        }
      ],
      "declare": false,
      "start": 444,
      "end": 462
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
            "name": "e",
            "optional": false,
            "typeAnnotation": null,
            "start": 467,
            "end": 468
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXMemberExpression",
                "object": {
                  "type": "JSXIdentifier",
                  "name": "Dotted",
                  "start": 472,
                  "end": 478
                },
                "property": {
                  "type": "JSXIdentifier",
                  "name": "Name",
                  "start": 479,
                  "end": 483
                },
                "start": 472,
                "end": 483
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": true,
              "start": 471,
              "end": 486
            },
            "children": [],
            "closingElement": null,
            "start": 471,
            "end": 486
          },
          "definite": false,
          "start": 467,
          "end": 486
        }
      ],
      "declare": false,
      "start": 463,
      "end": 487
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 487
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
    "value": "IntrinsicElements",
    "start": 35,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 53,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "foundFirst",
    "start": 57,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 67,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 69,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 71,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 72,
    "end": 73
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 74,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 81,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 82,
    "end": 83
  },
  {
    "type": "String",
    "value": "'string_named'",
    "start": 86,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 100,
    "end": 101
  },
  {
    "type": "String",
    "value": "'var'",
    "start": 104,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 109,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 112,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 114,
    "end": 115
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 117,
    "end": 122
  },
  {
    "type": "Identifier",
    "value": "foundFirst",
    "start": 123,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 134,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 136,
    "end": 137
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 138,
    "end": 143
  },
  {
    "type": "Identifier",
    "value": "Other",
    "start": 144,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 150,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 151,
    "end": 152
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 154,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "Dotted",
    "start": 164,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 171,
    "end": 172
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 174,
    "end": 180
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 181,
    "end": 186
  },
  {
    "type": "Identifier",
    "value": "Name",
    "start": 187,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 192,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 194,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 196,
    "end": 197
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 259,
    "end": 262
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 263,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 265,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 267,
    "end": 268
  },
  {
    "type": "JSXIdentifier",
    "value": "foundFirst",
    "start": 268,
    "end": 278
  },
  {
    "type": "JSXIdentifier",
    "value": "x",
    "start": 280,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 281,
    "end": 282
  },
  {
    "type": "JSXText",
    "value": "\"hello\"",
    "start": 282,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 290,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 291,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 292,
    "end": 293
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 294,
    "end": 297
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 298,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 300,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 302,
    "end": 303
  },
  {
    "type": "JSXIdentifier",
    "value": "string_named",
    "start": 303,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 316,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 317,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 318,
    "end": 319
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 444,
    "end": 447
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 448,
    "end": 449
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 450,
    "end": 451
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 452,
    "end": 453
  },
  {
    "type": "JSXIdentifier",
    "value": "Other",
    "start": 453,
    "end": 458
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 459,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 460,
    "end": 461
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 461,
    "end": 462
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 463,
    "end": 466
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 467,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 469,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 471,
    "end": 472
  },
  {
    "type": "JSXIdentifier",
    "value": "Dotted",
    "start": 472,
    "end": 478
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 478,
    "end": 479
  },
  {
    "type": "JSXIdentifier",
    "value": "Name",
    "start": 479,
    "end": 483
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 484,
    "end": 485
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 485,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 486,
    "end": 487
  }
]
```
