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
              "body": [],
              "start": 76,
              "end": 79
            },
            "declare": false,
            "start": 48,
            "end": 79
          }
        ],
        "start": 22,
        "end": 81
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 81
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 93,
        "end": 94
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
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 111,
                "end": 114
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
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
                      "name": "constructor",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 117,
                      "end": 128
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
                        "body": [],
                        "start": 131,
                        "end": 134
                      },
                      "expression": false,
                      "start": 128,
                      "end": 134
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 117,
                    "end": 134
                  }
                ],
                "start": 115,
                "end": 136
              },
              "abstract": false,
              "declare": false,
              "start": 105,
              "end": 136
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 98,
            "end": 136
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSModuleDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "S",
                "optional": false,
                "typeAnnotation": null,
                "start": 155,
                "end": 156
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
                        "name": "Bar",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 174,
                        "end": 177
                      },
                      "typeParameters": null,
                      "superClass": null,
                      "superTypeArguments": null,
                      "implements": [],
                      "body": {
                        "type": "ClassBody",
                        "body": [],
                        "start": 178,
                        "end": 181
                      },
                      "abstract": false,
                      "declare": false,
                      "start": 168,
                      "end": 181
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 161,
                    "end": 181
                  }
                ],
                "start": 157,
                "end": 218
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 145,
              "end": 218
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 138,
            "end": 218
          }
        ],
        "start": 95,
        "end": 220
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 83,
      "end": 220
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 232,
        "end": 233
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "SequenceExpression",
              "expressions": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 252,
                  "end": 255
                },
                {
                  "type": "JSXElement",
                  "openingElement": {
                    "type": "JSXOpeningElement",
                    "name": {
                      "type": "JSXIdentifier",
                      "name": "Foo",
                      "start": 258,
                      "end": 261
                    },
                    "typeArguments": null,
                    "attributes": [],
                    "selfClosing": true,
                    "start": 257,
                    "end": 264
                  },
                  "children": [],
                  "closingElement": null,
                  "start": 257,
                  "end": 264
                }
              ],
              "start": 252,
              "end": 264
            },
            "directive": null,
            "start": 252,
            "end": 265
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSModuleDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "S",
                "optional": false,
                "typeAnnotation": null,
                "start": 285,
                "end": 286
              },
              "body": {
                "type": "TSModuleBlock",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "SequenceExpression",
                      "expressions": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Foo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 307,
                          "end": 310
                        },
                        {
                          "type": "JSXElement",
                          "openingElement": {
                            "type": "JSXOpeningElement",
                            "name": {
                              "type": "JSXIdentifier",
                              "name": "Foo",
                              "start": 313,
                              "end": 316
                            },
                            "typeArguments": null,
                            "attributes": [],
                            "selfClosing": true,
                            "start": 312,
                            "end": 319
                          },
                          "children": [],
                          "closingElement": null,
                          "start": 312,
                          "end": 319
                        }
                      ],
                      "start": 307,
                      "end": 319
                    },
                    "directive": null,
                    "start": 307,
                    "end": 320
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "SequenceExpression",
                      "expressions": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Bar",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 340,
                          "end": 343
                        },
                        {
                          "type": "JSXElement",
                          "openingElement": {
                            "type": "JSXOpeningElement",
                            "name": {
                              "type": "JSXIdentifier",
                              "name": "Bar",
                              "start": 346,
                              "end": 349
                            },
                            "typeArguments": null,
                            "attributes": [],
                            "selfClosing": true,
                            "start": 345,
                            "end": 352
                          },
                          "children": [],
                          "closingElement": null,
                          "start": 345,
                          "end": 352
                        }
                      ],
                      "start": 340,
                      "end": 352
                    },
                    "directive": null,
                    "start": 340,
                    "end": 353
                  }
                ],
                "start": 287,
                "end": 356
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 275,
              "end": 356
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 268,
            "end": 356
          }
        ],
        "start": 234,
        "end": 359
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 222,
      "end": 359
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 371,
        "end": 372
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "SequenceExpression",
              "expressions": [
                {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "S",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 393,
                    "end": 394
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Bar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 395,
                    "end": 398
                  },
                  "optional": false,
                  "computed": false,
                  "start": 393,
                  "end": 398
                },
                {
                  "type": "JSXElement",
                  "openingElement": {
                    "type": "JSXOpeningElement",
                    "name": {
                      "type": "JSXMemberExpression",
                      "object": {
                        "type": "JSXIdentifier",
                        "name": "S",
                        "start": 401,
                        "end": 402
                      },
                      "property": {
                        "type": "JSXIdentifier",
                        "name": "Bar",
                        "start": 403,
                        "end": 406
                      },
                      "start": 401,
                      "end": 406
                    },
                    "typeArguments": null,
                    "attributes": [],
                    "selfClosing": true,
                    "start": 400,
                    "end": 409
                  },
                  "children": [],
                  "closingElement": null,
                  "start": 400,
                  "end": 409
                }
              ],
              "start": 393,
              "end": 409
            },
            "directive": null,
            "start": 393,
            "end": 410
          }
        ],
        "start": 373,
        "end": 412
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 361,
      "end": 412
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 424,
        "end": 425
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "M",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 433,
                  "end": 434
                },
                "init": {
                  "type": "Literal",
                  "value": 100,
                  "raw": "100",
                  "start": 437,
                  "end": 440
                },
                "definite": false,
                "start": 433,
                "end": 440
              }
            ],
            "declare": false,
            "start": 429,
            "end": 441
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "SequenceExpression",
              "expressions": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 460,
                  "end": 463
                },
                {
                  "type": "JSXElement",
                  "openingElement": {
                    "type": "JSXOpeningElement",
                    "name": {
                      "type": "JSXIdentifier",
                      "name": "Foo",
                      "start": 466,
                      "end": 469
                    },
                    "typeArguments": null,
                    "attributes": [],
                    "selfClosing": true,
                    "start": 465,
                    "end": 472
                  },
                  "children": [],
                  "closingElement": null,
                  "start": 465,
                  "end": 472
                }
              ],
              "start": 460,
              "end": 472
            },
            "directive": null,
            "start": 460,
            "end": 473
          }
        ],
        "start": 426,
        "end": 475
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 414,
      "end": 475
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 475
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
    "type": "Punctuator",
    "value": "}",
    "start": 78,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 80,
    "end": 81
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 83,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 93,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 95,
    "end": 96
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 98,
    "end": 104
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 105,
    "end": 110
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 111,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 115,
    "end": 116
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 117,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 128,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 129,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 131,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 133,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 135,
    "end": 136
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 138,
    "end": 144
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 145,
    "end": 154
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 155,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 157,
    "end": 158
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 161,
    "end": 167
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 168,
    "end": 173
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 174,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 178,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 180,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 217,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 219,
    "end": 220
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 222,
    "end": 231
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 232,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 234,
    "end": 235
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 252,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 255,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 257,
    "end": 258
  },
  {
    "type": "JSXIdentifier",
    "value": "Foo",
    "start": 258,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 262,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 263,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 264,
    "end": 265
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 268,
    "end": 274
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 275,
    "end": 284
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 285,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 287,
    "end": 288
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 307,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 310,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 312,
    "end": 313
  },
  {
    "type": "JSXIdentifier",
    "value": "Foo",
    "start": 313,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 317,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 318,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 319,
    "end": 320
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 340,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": ",",
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
    "value": "Bar",
    "start": 346,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 350,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 351,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 352,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 355,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 358,
    "end": 359
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 361,
    "end": 370
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 371,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 373,
    "end": 374
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 393,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 394,
    "end": 395
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 395,
    "end": 398
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 398,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 400,
    "end": 401
  },
  {
    "type": "JSXIdentifier",
    "value": "S",
    "start": 401,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 402,
    "end": 403
  },
  {
    "type": "JSXIdentifier",
    "value": "Bar",
    "start": 403,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 407,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 408,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 409,
    "end": 410
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 411,
    "end": 412
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 414,
    "end": 423
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 424,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 426,
    "end": 427
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 429,
    "end": 432
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 433,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 435,
    "end": 436
  },
  {
    "type": "Numeric",
    "value": "100",
    "start": 437,
    "end": 440
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 440,
    "end": 441
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 460,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 463,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 465,
    "end": 466
  },
  {
    "type": "JSXIdentifier",
    "value": "Foo",
    "start": 466,
    "end": 469
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 470,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 471,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 472,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 474,
    "end": 475
  }
]
```
