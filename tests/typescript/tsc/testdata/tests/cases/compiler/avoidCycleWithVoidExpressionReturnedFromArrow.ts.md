__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "HowlErrorCallback",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 22
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "soundId",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 35,
                "end": 41
              },
              "start": 33,
              "end": 41
            },
            "start": 26,
            "end": 41
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "error",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 50,
                "end": 57
              },
              "start": 48,
              "end": 57
            },
            "start": 43,
            "end": 57
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 62,
            "end": 66
          },
          "start": 59,
          "end": 66
        },
        "start": 25,
        "end": 66
      },
      "declare": false,
      "start": 0,
      "end": 67
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "HowlOptions",
        "optional": false,
        "typeAnnotation": null,
        "start": 79,
        "end": 90
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
              "name": "onplayerror",
              "optional": false,
              "typeAnnotation": null,
              "start": 95,
              "end": 106
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "HowlErrorCallback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 109,
                      "end": 126
                    },
                    "typeArguments": null,
                    "start": 109,
                    "end": 126
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 129,
                    "end": 138
                  }
                ],
                "start": 109,
                "end": 138
              },
              "start": 107,
              "end": 138
            },
            "accessibility": null,
            "static": false,
            "start": 95,
            "end": 139
          }
        ],
        "start": 91,
        "end": 141
      },
      "declare": false,
      "start": 69,
      "end": 141
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Howl",
        "optional": false,
        "typeAnnotation": null,
        "start": 149,
        "end": 153
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
              "start": 158,
              "end": 169
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "options",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "HowlOptions",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 195,
                          "end": 206
                        },
                        "typeArguments": null,
                        "start": 195,
                        "end": 206
                      },
                      "start": 193,
                      "end": 206
                    },
                    "start": 186,
                    "end": 206
                  },
                  "readonly": true,
                  "static": false,
                  "start": 170,
                  "end": 206
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 208,
                "end": 210
              },
              "expression": false,
              "start": 169,
              "end": 210
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 158,
            "end": 210
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "once",
              "optional": false,
              "typeAnnotation": null,
              "start": 213,
              "end": 217
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "unlock",
                        "raw": "\"unlock\"",
                        "start": 224,
                        "end": 232
                      },
                      "start": 224,
                      "end": 232
                    },
                    "start": 222,
                    "end": 232
                  },
                  "start": 218,
                  "end": 232
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fn",
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
                          "type": "TSVoidKeyword",
                          "start": 244,
                          "end": 248
                        },
                        "start": 241,
                        "end": 248
                      },
                      "start": 238,
                      "end": 248
                    },
                    "start": 236,
                    "end": 248
                  },
                  "start": 234,
                  "end": 248
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 256,
                          "end": 263
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 264,
                          "end": 267
                        },
                        "optional": false,
                        "computed": false,
                        "start": 256,
                        "end": 267
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "name",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 268,
                          "end": 272
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "fn",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 274,
                          "end": 276
                        }
                      ],
                      "optional": false,
                      "start": 256,
                      "end": 277
                    },
                    "directive": null,
                    "start": 256,
                    "end": 278
                  }
                ],
                "start": 250,
                "end": 282
              },
              "expression": false,
              "start": 217,
              "end": 282
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 213,
            "end": 282
          }
        ],
        "start": 154,
        "end": 284
      },
      "abstract": false,
      "declare": false,
      "start": 143,
      "end": 284
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
            "name": "instance",
            "optional": false,
            "typeAnnotation": null,
            "start": 292,
            "end": 300
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Howl",
              "optional": false,
              "typeAnnotation": null,
              "start": 307,
              "end": 311
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "onplayerror",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 316,
                      "end": 327
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "UnaryExpression",
                        "operator": "void",
                        "argument": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "instance",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 340,
                              "end": 348
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "once",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 349,
                              "end": 353
                            },
                            "optional": false,
                            "computed": false,
                            "start": 340,
                            "end": 353
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Literal",
                              "value": "unlock",
                              "raw": "\"unlock\"",
                              "start": 354,
                              "end": 362
                            },
                            {
                              "type": "ArrowFunctionExpression",
                              "expression": false,
                              "async": false,
                              "typeParameters": null,
                              "params": [],
                              "returnType": null,
                              "body": {
                                "type": "BlockStatement",
                                "body": [],
                                "start": 370,
                                "end": 372
                              },
                              "id": null,
                              "generator": false,
                              "start": 364,
                              "end": 372
                            }
                          ],
                          "optional": false,
                          "start": 340,
                          "end": 373
                        },
                        "prefix": true,
                        "start": 335,
                        "end": 373
                      },
                      "id": null,
                      "generator": false,
                      "start": 329,
                      "end": 373
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 316,
                    "end": 373
                  }
                ],
                "start": 312,
                "end": 376
              }
            ],
            "start": 303,
            "end": 377
          },
          "definite": false,
          "start": 292,
          "end": 377
        }
      ],
      "declare": false,
      "start": 286,
      "end": 378
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 378
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 0,
    "end": 4
  },
  {
    "type": "Identifier",
    "value": "HowlErrorCallback",
    "start": 5,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 23,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 25,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "soundId",
    "start": 26,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 33,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 35,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 41,
    "end": 42
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 43,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 48,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 50,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 57,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 59,
    "end": 61
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 62,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 66,
    "end": 67
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 69,
    "end": 78
  },
  {
    "type": "Identifier",
    "value": "HowlOptions",
    "start": 79,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 91,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "onplayerror",
    "start": 95,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 106,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 107,
    "end": 108
  },
  {
    "type": "Identifier",
    "value": "HowlErrorCallback",
    "start": 109,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 127,
    "end": 128
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 129,
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
    "start": 143,
    "end": 148
  },
  {
    "type": "Identifier",
    "value": "Howl",
    "start": 149,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 154,
    "end": 155
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 158,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 169,
    "end": 170
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 170,
    "end": 176
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 177,
    "end": 185
  },
  {
    "type": "Identifier",
    "value": "options",
    "start": 186,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 193,
    "end": 194
  },
  {
    "type": "Identifier",
    "value": "HowlOptions",
    "start": 195,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 206,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 208,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 209,
    "end": 210
  },
  {
    "type": "Identifier",
    "value": "once",
    "start": 213,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 217,
    "end": 218
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 218,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 222,
    "end": 223
  },
  {
    "type": "String",
    "value": "\"unlock\"",
    "start": 224,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 232,
    "end": 233
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 234,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 236,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 238,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 239,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 241,
    "end": 243
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 244,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 248,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 250,
    "end": 251
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 256,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 263,
    "end": 264
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 264,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 267,
    "end": 268
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 268,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 272,
    "end": 273
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 274,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 276,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 277,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 281,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 283,
    "end": 284
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 286,
    "end": 291
  },
  {
    "type": "Identifier",
    "value": "instance",
    "start": 292,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 301,
    "end": 302
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 303,
    "end": 306
  },
  {
    "type": "Identifier",
    "value": "Howl",
    "start": 307,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 311,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 312,
    "end": 313
  },
  {
    "type": "Identifier",
    "value": "onplayerror",
    "start": 316,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 327,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 329,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 330,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 332,
    "end": 334
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 335,
    "end": 339
  },
  {
    "type": "Identifier",
    "value": "instance",
    "start": 340,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 348,
    "end": 349
  },
  {
    "type": "Identifier",
    "value": "once",
    "start": 349,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 353,
    "end": 354
  },
  {
    "type": "String",
    "value": "\"unlock\"",
    "start": 354,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 362,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 364,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 365,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 367,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 370,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "value": ",",
    "start": 373,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 375,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 376,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 377,
    "end": 378
  }
]
```
