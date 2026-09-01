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
        "start": 10,
        "end": 13
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "IntrinsicElements",
                "optional": false,
                "typeAnnotation": null,
                "start": 37,
                "end": 54
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
                      "name": "span",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 65,
                      "end": 69
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "members": [],
                        "start": 71,
                        "end": 73
                      },
                      "start": 69,
                      "end": 73
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 65,
                    "end": 74
                  }
                ],
                "start": 55,
                "end": 80
              },
              "declare": false,
              "start": 27,
              "end": 80
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 20,
            "end": 80
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Element",
                "optional": false,
                "typeAnnotation": null,
                "start": 102,
                "end": 109
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "something",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 114,
                      "end": 123
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 126,
                        "end": 129
                      },
                      "start": 124,
                      "end": 129
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 114,
                    "end": 130
                  }
                ],
                "start": 110,
                "end": 136
              },
              "declare": false,
              "start": 92,
              "end": 136
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 85,
            "end": 136
          }
        ],
        "start": 14,
        "end": 138
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 138
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
            "name": "FooComponent",
            "optional": false,
            "typeAnnotation": null,
            "start": 146,
            "end": 158
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
                          "start": 171,
                          "end": 174
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSUnionType",
                            "types": [
                              {
                                "type": "TSLiteralType",
                                "literal": {
                                  "type": "Literal",
                                  "value": "A",
                                  "raw": "\"A\"",
                                  "start": 176,
                                  "end": 179
                                },
                                "start": 176,
                                "end": 179
                              },
                              {
                                "type": "TSLiteralType",
                                "literal": {
                                  "type": "Literal",
                                  "value": "B",
                                  "raw": "\"B\"",
                                  "start": 182,
                                  "end": 185
                                },
                                "start": 182,
                                "end": 185
                              },
                              {
                                "type": "TSLiteralType",
                                "literal": {
                                  "type": "Literal",
                                  "value": "C",
                                  "raw": "\"C\"",
                                  "start": 188,
                                  "end": 191
                                },
                                "start": 188,
                                "end": 191
                              }
                            ],
                            "start": 176,
                            "end": 191
                          },
                          "start": 174,
                          "end": 191
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 171,
                        "end": 191
                      }
                    ],
                    "start": 169,
                    "end": 193
                  },
                  "start": 167,
                  "end": 193
                },
                "start": 162,
                "end": 193
              }
            ],
            "returnType": null,
            "body": {
              "type": "JSXElement",
              "openingElement": {
                "type": "JSXOpeningElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "span",
                  "start": 199,
                  "end": 203
                },
                "typeArguments": null,
                "attributes": [],
                "selfClosing": false,
                "start": 198,
                "end": 204
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
                      "start": 205,
                      "end": 210
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 211,
                      "end": 214
                    },
                    "optional": false,
                    "computed": false,
                    "start": 205,
                    "end": 214
                  },
                  "start": 204,
                  "end": 215
                }
              ],
              "closingElement": {
                "type": "JSXClosingElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "span",
                  "start": 217,
                  "end": 221
                },
                "start": 215,
                "end": 222
              },
              "start": 198,
              "end": 222
            },
            "id": null,
            "generator": false,
            "start": 161,
            "end": 222
          },
          "definite": false,
          "start": 146,
          "end": 222
        }
      ],
      "declare": false,
      "start": 140,
      "end": 223
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "FooComponent",
            "start": 226,
            "end": 238
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "foo",
                "start": 239,
                "end": 242
              },
              "value": {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "Literal",
                  "value": "A",
                  "raw": "\"A\"",
                  "start": 244,
                  "end": 247
                },
                "start": 243,
                "end": 248
              },
              "start": 239,
              "end": 248
            }
          ],
          "selfClosing": true,
          "start": 225,
          "end": 251
        },
        "children": [],
        "closingElement": null,
        "start": 225,
        "end": 251
      },
      "directive": null,
      "start": 225,
      "end": 252
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "FooComponent",
            "start": 254,
            "end": 266
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "foo",
                "start": 267,
                "end": 270
              },
              "value": {
                "type": "Literal",
                "value": "A",
                "raw": "\"A\"",
                "start": 271,
                "end": 274
              },
              "start": 267,
              "end": 274
            }
          ],
          "selfClosing": true,
          "start": 253,
          "end": 279
        },
        "children": [],
        "closingElement": null,
        "start": 253,
        "end": 279
      },
      "directive": null,
      "start": 253,
      "end": 280
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "FooComponent",
            "start": 283,
            "end": 295
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "foo",
                "start": 296,
                "end": 299
              },
              "value": {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "Literal",
                  "value": "f",
                  "raw": "\"f\"",
                  "start": 301,
                  "end": 304
                },
                "start": 300,
                "end": 305
              },
              "start": 296,
              "end": 305
            }
          ],
          "selfClosing": true,
          "start": 282,
          "end": 308
        },
        "children": [],
        "closingElement": null,
        "start": 282,
        "end": 308
      },
      "directive": null,
      "start": 282,
      "end": 309
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "FooComponent",
            "start": 311,
            "end": 323
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "foo",
                "start": 324,
                "end": 327
              },
              "value": {
                "type": "Literal",
                "value": "f",
                "raw": "\"f\"",
                "start": 328,
                "end": 331
              },
              "start": 324,
              "end": 331
            }
          ],
          "selfClosing": true,
          "start": 310,
          "end": 336
        },
        "children": [],
        "closingElement": null,
        "start": 310,
        "end": 336
      },
      "directive": null,
      "start": 310,
      "end": 337
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 337
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 0,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "JSX",
    "start": 10,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 14,
    "end": 15
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 20,
    "end": 26
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 27,
    "end": 36
  },
  {
    "type": "Identifier",
    "value": "IntrinsicElements",
    "start": 37,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 55,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "span",
    "start": 65,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 69,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 71,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 72,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 73,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 79,
    "end": 80
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 85,
    "end": 91
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 92,
    "end": 101
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 102,
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
    "value": "something",
    "start": 114,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 123,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 124,
    "end": 125
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 126,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 129,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 135,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 137,
    "end": 138
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 140,
    "end": 145
  },
  {
    "type": "Identifier",
    "value": "FooComponent",
    "start": 146,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 159,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 161,
    "end": 162
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 162,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 167,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 169,
    "end": 170
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 171,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 174,
    "end": 175
  },
  {
    "type": "String",
    "value": "\"A\"",
    "start": 176,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 180,
    "end": 181
  },
  {
    "type": "String",
    "value": "\"B\"",
    "start": 182,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 186,
    "end": 187
  },
  {
    "type": "String",
    "value": "\"C\"",
    "start": 188,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 192,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 193,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 195,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 198,
    "end": 199
  },
  {
    "type": "JSXIdentifier",
    "value": "span",
    "start": 199,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 203,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 204,
    "end": 205
  },
  {
    "type": "JSXIdentifier",
    "value": "props",
    "start": 205,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 210,
    "end": 211
  },
  {
    "type": "JSXIdentifier",
    "value": "foo",
    "start": 211,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 214,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 215,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 216,
    "end": 217
  },
  {
    "type": "JSXIdentifier",
    "value": "span",
    "start": 217,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 221,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 222,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 225,
    "end": 226
  },
  {
    "type": "JSXIdentifier",
    "value": "FooComponent",
    "start": 226,
    "end": 238
  },
  {
    "type": "JSXIdentifier",
    "value": "foo",
    "start": 239,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 242,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 243,
    "end": 244
  },
  {
    "type": "String",
    "value": "\"A\"",
    "start": 244,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 247,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 249,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 250,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 251,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 253,
    "end": 254
  },
  {
    "type": "JSXIdentifier",
    "value": "FooComponent",
    "start": 254,
    "end": 266
  },
  {
    "type": "JSXIdentifier",
    "value": "foo",
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
    "value": "\"A\"",
    "start": 271,
    "end": 274
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
    "type": "Punctuator",
    "value": "<",
    "start": 282,
    "end": 283
  },
  {
    "type": "JSXIdentifier",
    "value": "FooComponent",
    "start": 283,
    "end": 295
  },
  {
    "type": "JSXIdentifier",
    "value": "foo",
    "start": 296,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 299,
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
    "value": "\"f\"",
    "start": 301,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 304,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 306,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 307,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": ";",
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
    "value": "FooComponent",
    "start": 311,
    "end": 323
  },
  {
    "type": "JSXIdentifier",
    "value": "foo",
    "start": 324,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 327,
    "end": 328
  },
  {
    "type": "JSXText",
    "value": "\"f\"",
    "start": 328,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 334,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 335,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 336,
    "end": 337
  }
]
```
