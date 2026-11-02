__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Plugins",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 13
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "Linker",
              "optional": false,
              "typeAnnotation": null,
              "start": 27,
              "end": 33
            },
            "typeAnnotation": null,
            "value": {
              "type": "ClassExpression",
              "decorators": [],
              "id": null,
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 42,
                "end": 44
              },
              "abstract": false,
              "declare": false,
              "start": 36,
              "end": 44
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 20,
            "end": 45
          }
        ],
        "start": 14,
        "end": 47
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 47
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 55,
        "end": 56
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "name": "plugins",
              "start": 63,
              "end": 71
            },
            "typeAnnotation": null,
            "value": {
              "type": "Identifier",
              "decorators": [],
              "name": "Plugins",
              "optional": false,
              "typeAnnotation": null,
              "start": 74,
              "end": 81
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 63,
            "end": 82
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "name": "staticPlugins",
              "start": 94,
              "end": 108
            },
            "typeAnnotation": null,
            "value": {
              "type": "Identifier",
              "decorators": [],
              "name": "Plugins",
              "optional": false,
              "typeAnnotation": null,
              "start": 111,
              "end": 118
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 87,
            "end": 119
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null,
              "start": 125,
              "end": 126
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
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 143,
                            "end": 147
                          },
                          "property": {
                            "type": "PrivateIdentifier",
                            "name": "plugins",
                            "start": 148,
                            "end": 156
                          },
                          "optional": false,
                          "computed": false,
                          "start": 143,
                          "end": 156
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Linker",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 157,
                          "end": 163
                        },
                        "optional": false,
                        "computed": false,
                        "start": 143,
                        "end": 163
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 139,
                      "end": 165
                    },
                    "directive": null,
                    "start": 139,
                    "end": 166
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 179,
                            "end": 183
                          },
                          "property": {
                            "type": "PrivateIdentifier",
                            "name": "plugins",
                            "start": 184,
                            "end": 192
                          },
                          "optional": false,
                          "computed": false,
                          "start": 179,
                          "end": 192
                        },
                        "property": {
                          "type": "Literal",
                          "value": "Linker",
                          "raw": "\"Linker\"",
                          "start": 193,
                          "end": 201
                        },
                        "optional": false,
                        "computed": true,
                        "start": 179,
                        "end": 202
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 175,
                      "end": 204
                    },
                    "directive": null,
                    "start": 175,
                    "end": 205
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "A",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 218,
                            "end": 219
                          },
                          "property": {
                            "type": "PrivateIdentifier",
                            "name": "staticPlugins",
                            "start": 220,
                            "end": 234
                          },
                          "optional": false,
                          "computed": false,
                          "start": 218,
                          "end": 234
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Linker",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 235,
                          "end": 241
                        },
                        "optional": false,
                        "computed": false,
                        "start": 218,
                        "end": 241
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 214,
                      "end": 243
                    },
                    "directive": null,
                    "start": 214,
                    "end": 244
                  }
                ],
                "start": 129,
                "end": 250
              },
              "expression": false,
              "start": 126,
              "end": 250
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 125,
            "end": 250
          }
        ],
        "start": 57,
        "end": 252
      },
      "abstract": false,
      "declare": false,
      "start": 49,
      "end": 252
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 260,
        "end": 261
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "Plugins",
              "optional": false,
              "typeAnnotation": null,
              "start": 275,
              "end": 282
            },
            "typeAnnotation": null,
            "value": {
              "type": "Identifier",
              "decorators": [],
              "name": "Plugins",
              "optional": false,
              "typeAnnotation": null,
              "start": 285,
              "end": 292
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 268,
            "end": 293
          }
        ],
        "start": 262,
        "end": 295
      },
      "abstract": false,
      "declare": false,
      "start": 254,
      "end": 295
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 303,
        "end": 304
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 313,
        "end": 314
      },
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
              "name": "m",
              "optional": false,
              "typeAnnotation": null,
              "start": 334,
              "end": 335
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": true,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "key",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "Plugins",
                        "raw": "\"Plugins\"",
                        "start": 341,
                        "end": 350
                      },
                      "start": 341,
                      "end": 350
                    },
                    "start": 339,
                    "end": 350
                  },
                  "start": 336,
                  "end": 350
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Super",
                            "start": 366,
                            "end": 371
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "key",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 372,
                            "end": 375
                          },
                          "optional": false,
                          "computed": true,
                          "start": 366,
                          "end": 376
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Linker",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 377,
                          "end": 383
                        },
                        "optional": false,
                        "computed": false,
                        "start": 366,
                        "end": 383
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 362,
                      "end": 385
                    },
                    "directive": null,
                    "start": 362,
                    "end": 386
                  }
                ],
                "start": 352,
                "end": 392
              },
              "expression": false,
              "start": 335,
              "end": 392
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 321,
            "end": 392
          }
        ],
        "start": 315,
        "end": 394
      },
      "abstract": false,
      "declare": false,
      "start": 297,
      "end": 394
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 394
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 0,
    "end": 5
  },
  {
    "type": "Identifier",
    "value": "Plugins",
    "start": 6,
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
    "value": "static",
    "start": 20,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "Linker",
    "start": 27,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 34,
    "end": 35
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 36,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 42,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 43,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 44,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 46,
    "end": 47
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 49,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 55,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 57,
    "end": 58
  },
  {
    "type": "PrivateIdentifier",
    "value": "plugins",
    "start": 63,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 72,
    "end": 73
  },
  {
    "type": "Identifier",
    "value": "Plugins",
    "start": 74,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 81,
    "end": 82
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 87,
    "end": 93
  },
  {
    "type": "PrivateIdentifier",
    "value": "staticPlugins",
    "start": 94,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 109,
    "end": 110
  },
  {
    "type": "Identifier",
    "value": "Plugins",
    "start": 111,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 118,
    "end": 119
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 125,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 126,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 127,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 129,
    "end": 130
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 139,
    "end": 142
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 143,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 147,
    "end": 148
  },
  {
    "type": "PrivateIdentifier",
    "value": "plugins",
    "start": 148,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 156,
    "end": 157
  },
  {
    "type": "Identifier",
    "value": "Linker",
    "start": 157,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 163,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 164,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 165,
    "end": 166
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 175,
    "end": 178
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 179,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 183,
    "end": 184
  },
  {
    "type": "PrivateIdentifier",
    "value": "plugins",
    "start": 184,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 192,
    "end": 193
  },
  {
    "type": "String",
    "value": "\"Linker\"",
    "start": 193,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 201,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 202,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 203,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 204,
    "end": 205
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 214,
    "end": 217
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 218,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 219,
    "end": 220
  },
  {
    "type": "PrivateIdentifier",
    "value": "staticPlugins",
    "start": 220,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 234,
    "end": 235
  },
  {
    "type": "Identifier",
    "value": "Linker",
    "start": 235,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 241,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 242,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 243,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 249,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 251,
    "end": 252
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 254,
    "end": 259
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 260,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 262,
    "end": 263
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 268,
    "end": 274
  },
  {
    "type": "Identifier",
    "value": "Plugins",
    "start": 275,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 283,
    "end": 284
  },
  {
    "type": "Identifier",
    "value": "Plugins",
    "start": 285,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 292,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 294,
    "end": 295
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 297,
    "end": 302
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 303,
    "end": 304
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 305,
    "end": 312
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 313,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 315,
    "end": 316
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 321,
    "end": 327
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 328,
    "end": 333
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 334,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 335,
    "end": 336
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 336,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 339,
    "end": 340
  },
  {
    "type": "String",
    "value": "\"Plugins\"",
    "start": 341,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 350,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 352,
    "end": 353
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 362,
    "end": 365
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 366,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 371,
    "end": 372
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 372,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 375,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 376,
    "end": 377
  },
  {
    "type": "Identifier",
    "value": "Linker",
    "start": 377,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 383,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 384,
    "end": 385
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 385,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 391,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 393,
    "end": 394
  }
]
```
