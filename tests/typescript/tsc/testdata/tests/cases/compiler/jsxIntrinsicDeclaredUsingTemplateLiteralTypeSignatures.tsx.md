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
        "start": 75,
        "end": 78
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
              "start": 93,
              "end": 110
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSIndexSignature",
                  "parameters": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "k",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTemplateLiteralType",
                          "quasis": [
                            {
                              "type": "TemplateElement",
                              "value": {
                                "raw": "foo",
                                "cooked": "foo"
                              },
                              "tail": false,
                              "start": 121,
                              "end": 127
                            },
                            {
                              "type": "TemplateElement",
                              "value": {
                                "raw": "",
                                "cooked": ""
                              },
                              "tail": true,
                              "start": 133,
                              "end": 135
                            }
                          ],
                          "types": [
                            {
                              "type": "TSStringKeyword",
                              "start": 127,
                              "end": 133
                            }
                          ],
                          "start": 121,
                          "end": 135
                        },
                        "start": 119,
                        "end": 135
                      },
                      "start": 118,
                      "end": 135
                    }
                  ],
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
                            "name": "prop",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 140,
                            "end": 144
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 146,
                              "end": 152
                            },
                            "start": 144,
                            "end": 152
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 140,
                          "end": 152
                        }
                      ],
                      "start": 138,
                      "end": 154
                    },
                    "start": 136,
                    "end": 154
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 117,
                  "end": 155
                },
                {
                  "type": "TSIndexSignature",
                  "parameters": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "k",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTemplateLiteralType",
                          "quasis": [
                            {
                              "type": "TemplateElement",
                              "value": {
                                "raw": "foobar",
                                "cooked": "foobar"
                              },
                              "tail": false,
                              "start": 164,
                              "end": 173
                            },
                            {
                              "type": "TemplateElement",
                              "value": {
                                "raw": "",
                                "cooked": ""
                              },
                              "tail": true,
                              "start": 179,
                              "end": 181
                            }
                          ],
                          "types": [
                            {
                              "type": "TSStringKeyword",
                              "start": 173,
                              "end": 179
                            }
                          ],
                          "start": 164,
                          "end": 181
                        },
                        "start": 162,
                        "end": 181
                      },
                      "start": 161,
                      "end": 181
                    }
                  ],
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
                            "name": "prop",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 186,
                            "end": 190
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSLiteralType",
                              "literal": {
                                "type": "Literal",
                                "value": "literal",
                                "raw": "'literal'",
                                "start": 192,
                                "end": 201
                              },
                              "start": 192,
                              "end": 201
                            },
                            "start": 190,
                            "end": 201
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 186,
                          "end": 201
                        }
                      ],
                      "start": 184,
                      "end": 203
                    },
                    "start": 182,
                    "end": 203
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 160,
                  "end": 204
                }
              ],
              "start": 111,
              "end": 208
            },
            "declare": false,
            "start": 83,
            "end": 208
          }
        ],
        "start": 79,
        "end": 210
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 57,
      "end": 210
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "foobaz",
            "start": 213,
            "end": 219
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "prop",
                "start": 220,
                "end": 224
              },
              "value": {
                "type": "Literal",
                "value": "smth",
                "raw": "\"smth\"",
                "start": 225,
                "end": 231
              },
              "start": 220,
              "end": 231
            }
          ],
          "selfClosing": true,
          "start": 212,
          "end": 234
        },
        "children": [],
        "closingElement": null,
        "start": 212,
        "end": 234
      },
      "directive": null,
      "start": 212,
      "end": 235
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "foobaz",
            "start": 237,
            "end": 243
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "prop",
                "start": 244,
                "end": 248
              },
              "value": {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "Literal",
                  "value": 10,
                  "raw": "10",
                  "start": 250,
                  "end": 252
                },
                "start": 249,
                "end": 253
              },
              "start": 244,
              "end": 253
            }
          ],
          "selfClosing": true,
          "start": 236,
          "end": 256
        },
        "children": [],
        "closingElement": null,
        "start": 236,
        "end": 256
      },
      "directive": null,
      "start": 236,
      "end": 257
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "foobarbaz",
            "start": 260,
            "end": 269
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "prop",
                "start": 270,
                "end": 274
              },
              "value": {
                "type": "Literal",
                "value": "literal",
                "raw": "\"literal\"",
                "start": 275,
                "end": 284
              },
              "start": 270,
              "end": 284
            }
          ],
          "selfClosing": true,
          "start": 259,
          "end": 286
        },
        "children": [],
        "closingElement": null,
        "start": 259,
        "end": 286
      },
      "directive": null,
      "start": 259,
      "end": 287
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "foobarbaz",
            "start": 289,
            "end": 298
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "prop",
                "start": 299,
                "end": 303
              },
              "value": {
                "type": "Literal",
                "value": "smth",
                "raw": "\"smth\"",
                "start": 304,
                "end": 310
              },
              "start": 299,
              "end": 310
            }
          ],
          "selfClosing": true,
          "start": 288,
          "end": 312
        },
        "children": [],
        "closingElement": null,
        "start": 288,
        "end": 312
      },
      "directive": null,
      "start": 288,
      "end": 313
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 57,
  "end": 313
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 57,
    "end": 64
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 65,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "JSX",
    "start": 75,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 79,
    "end": 80
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 83,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "IntrinsicElements",
    "start": 93,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 111,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 117,
    "end": 118
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 118,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 119,
    "end": 120
  },
  {
    "type": "Template",
    "value": "`foo${",
    "start": 121,
    "end": 127
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 127,
    "end": 133
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 133,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 135,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 136,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 138,
    "end": 139
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 140,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 144,
    "end": 145
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 146,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 153,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 154,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 160,
    "end": 161
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 161,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 162,
    "end": 163
  },
  {
    "type": "Template",
    "value": "`foobar${",
    "start": 164,
    "end": 173
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 173,
    "end": 179
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 179,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 181,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 182,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 184,
    "end": 185
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 186,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 190,
    "end": 191
  },
  {
    "type": "String",
    "value": "'literal'",
    "start": 192,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 202,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 203,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 207,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 209,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 212,
    "end": 213
  },
  {
    "type": "JSXIdentifier",
    "value": "foobaz",
    "start": 213,
    "end": 219
  },
  {
    "type": "JSXIdentifier",
    "value": "prop",
    "start": 220,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 224,
    "end": 225
  },
  {
    "type": "JSXText",
    "value": "\"smth\"",
    "start": 225,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 232,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 233,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 234,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 236,
    "end": 237
  },
  {
    "type": "JSXIdentifier",
    "value": "foobaz",
    "start": 237,
    "end": 243
  },
  {
    "type": "JSXIdentifier",
    "value": "prop",
    "start": 244,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 248,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 249,
    "end": 250
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 250,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 252,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 254,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 255,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 256,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 259,
    "end": 260
  },
  {
    "type": "JSXIdentifier",
    "value": "foobarbaz",
    "start": 260,
    "end": 269
  },
  {
    "type": "JSXIdentifier",
    "value": "prop",
    "start": 270,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 274,
    "end": 275
  },
  {
    "type": "JSXText",
    "value": "\"literal\"",
    "start": 275,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 284,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 285,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 286,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 288,
    "end": 289
  },
  {
    "type": "JSXIdentifier",
    "value": "foobarbaz",
    "start": 289,
    "end": 298
  },
  {
    "type": "JSXIdentifier",
    "value": "prop",
    "start": 299,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 303,
    "end": 304
  },
  {
    "type": "JSXText",
    "value": "\"smth\"",
    "start": 304,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 310,
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
  }
]
```
