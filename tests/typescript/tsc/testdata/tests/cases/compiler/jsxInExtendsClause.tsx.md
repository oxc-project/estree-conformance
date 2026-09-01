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
        "name": "React",
        "optional": false,
        "typeAnnotation": null,
        "start": 74,
        "end": 79
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "ComponentClass",
              "optional": false,
              "typeAnnotation": null,
              "start": 94,
              "end": 108
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 109,
                    "end": 110
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 109,
                  "end": 110
                }
              ],
              "start": 108,
              "end": 111
            },
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSConstructSignatureDeclaration",
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Component",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 122,
                        "end": 131
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "P",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 132,
                              "end": 133
                            },
                            "typeArguments": null,
                            "start": 132,
                            "end": 133
                          },
                          {
                            "type": "TSTypeLiteral",
                            "members": [],
                            "start": 135,
                            "end": 137
                          }
                        ],
                        "start": 131,
                        "end": 138
                      },
                      "start": 122,
                      "end": 138
                    },
                    "start": 120,
                    "end": 138
                  },
                  "start": 114,
                  "end": 139
                }
              ],
              "start": 112,
              "end": 141
            },
            "declare": false,
            "start": 84,
            "end": 141
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Component",
              "optional": false,
              "typeAnnotation": null,
              "start": 150,
              "end": 159
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 160,
                    "end": 161
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 160,
                  "end": 161
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 163,
                    "end": 164
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 163,
                  "end": 164
                }
              ],
              "start": 159,
              "end": 165
            },
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 166,
              "end": 168
            },
            "abstract": false,
            "declare": false,
            "start": 144,
            "end": 168
          }
        ],
        "start": 80,
        "end": 170
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 56,
      "end": 170
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "createComponentClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 188,
        "end": 208
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 209,
              "end": 210
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 209,
            "end": 210
          }
        ],
        "start": 208,
        "end": 211
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "factory",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "TSQualifiedName",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "React",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 227,
                      "end": 232
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ComponentClass",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 233,
                      "end": 247
                    },
                    "start": 227,
                    "end": 247
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "P",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 248,
                          "end": 249
                        },
                        "typeArguments": null,
                        "start": 248,
                        "end": 249
                      }
                    ],
                    "start": 247,
                    "end": 250
                  },
                  "start": 227,
                  "end": 250
                },
                "start": 224,
                "end": 250
              },
              "start": 221,
              "end": 250
            },
            "start": 219,
            "end": 250
          },
          "start": 212,
          "end": 250
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
              "name": "React",
              "optional": false,
              "typeAnnotation": null,
              "start": 253,
              "end": 258
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "ComponentClass",
              "optional": false,
              "typeAnnotation": null,
              "start": 259,
              "end": 273
            },
            "start": 253,
            "end": 273
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 274,
                  "end": 275
                },
                "typeArguments": null,
                "start": 274,
                "end": 275
              }
            ],
            "start": 273,
            "end": 276
          },
          "start": 253,
          "end": 276
        },
        "start": 251,
        "end": 276
      },
      "body": null,
      "expression": false,
      "start": 171,
      "end": 277
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 284,
        "end": 287
      },
      "typeParameters": null,
      "superClass": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "createComponentClass",
          "optional": false,
          "typeAnnotation": null,
          "start": 296,
          "end": 316
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "ClassExpression",
              "decorators": [],
              "id": null,
              "typeParameters": null,
              "superClass": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "React",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 337,
                  "end": 342
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Component",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 343,
                  "end": 352
                },
                "optional": false,
                "computed": false,
                "start": 337,
                "end": 352
              },
              "superTypeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeLiteral",
                    "members": [],
                    "start": 353,
                    "end": 355
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [],
                    "start": 357,
                    "end": 359
                  }
                ],
                "start": 352,
                "end": 360
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
                      "start": 365,
                      "end": 371
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
                                  "name": "span",
                                  "start": 388,
                                  "end": 392
                                },
                                "typeArguments": null,
                                "attributes": [],
                                "selfClosing": false,
                                "start": 387,
                                "end": 393
                              },
                              "children": [
                                {
                                  "type": "JSXText",
                                  "value": "Hello, world!",
                                  "raw": "Hello, world!",
                                  "start": 393,
                                  "end": 406
                                }
                              ],
                              "closingElement": {
                                "type": "JSXClosingElement",
                                "name": {
                                  "type": "JSXIdentifier",
                                  "name": "span",
                                  "start": 408,
                                  "end": 412
                                },
                                "start": 406,
                                "end": 413
                              },
                              "start": 387,
                              "end": 413
                            },
                            "start": 380,
                            "end": 414
                          }
                        ],
                        "start": 374,
                        "end": 418
                      },
                      "expression": false,
                      "start": 371,
                      "end": 418
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 365,
                    "end": 418
                  }
                ],
                "start": 361,
                "end": 420
              },
              "abstract": false,
              "declare": false,
              "start": 323,
              "end": 420
            },
            "id": null,
            "generator": false,
            "start": 317,
            "end": 420
          }
        ],
        "optional": false,
        "start": 296,
        "end": 421
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 422,
        "end": 424
      },
      "abstract": false,
      "declare": false,
      "start": 278,
      "end": 424
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 56,
  "end": 424
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 56,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 64,
    "end": 73
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 74,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 80,
    "end": 81
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 84,
    "end": 93
  },
  {
    "type": "Identifier",
    "value": "ComponentClass",
    "start": 94,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 108,
    "end": 109
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 109,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "type": "Keyword",
    "value": "new",
    "start": 114,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 118,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 119,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 120,
    "end": 121
  },
  {
    "type": "Identifier",
    "value": "Component",
    "start": 122,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 131,
    "end": 132
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 132,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 133,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 135,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 136,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 137,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 138,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 140,
    "end": 141
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 144,
    "end": 149
  },
  {
    "type": "Identifier",
    "value": "Component",
    "start": 150,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 159,
    "end": 160
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 160,
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
    "value": "B",
    "start": 163,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 164,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 166,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 167,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 169,
    "end": 170
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 171,
    "end": 178
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 179,
    "end": 187
  },
  {
    "type": "Identifier",
    "value": "createComponentClass",
    "start": 188,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 208,
    "end": 209
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 209,
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
    "value": "(",
    "start": 211,
    "end": 212
  },
  {
    "type": "Identifier",
    "value": "factory",
    "start": 212,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 219,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 221,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 222,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 224,
    "end": 226
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 227,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 232,
    "end": 233
  },
  {
    "type": "Identifier",
    "value": "ComponentClass",
    "start": 233,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 247,
    "end": 248
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 248,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 249,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 250,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 251,
    "end": 252
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 253,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 258,
    "end": 259
  },
  {
    "type": "Identifier",
    "value": "ComponentClass",
    "start": 259,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 273,
    "end": 274
  },
  {
    "type": "Identifier",
    "value": "P",
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
    "type": "Keyword",
    "value": "class",
    "start": 278,
    "end": 283
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 284,
    "end": 287
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 288,
    "end": 295
  },
  {
    "type": "Identifier",
    "value": "createComponentClass",
    "start": 296,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 316,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 317,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 318,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 320,
    "end": 322
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 323,
    "end": 328
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 329,
    "end": 336
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 337,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 342,
    "end": 343
  },
  {
    "type": "Identifier",
    "value": "Component",
    "start": 343,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 352,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 353,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 354,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 355,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 357,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 358,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 359,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 361,
    "end": 362
  },
  {
    "type": "Identifier",
    "value": "render",
    "start": 365,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 371,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 372,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 374,
    "end": 375
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 380,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 387,
    "end": 388
  },
  {
    "type": "JSXIdentifier",
    "value": "span",
    "start": 388,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 392,
    "end": 393
  },
  {
    "type": "JSXText",
    "value": "Hello, world!",
    "start": 393,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 406,
    "end": 407
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 407,
    "end": 408
  },
  {
    "type": "JSXIdentifier",
    "value": "span",
    "start": 408,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 412,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 413,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 417,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 419,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 420,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 422,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 423,
    "end": 424
  }
]
```
