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
        "name": "Validate",
        "optional": false,
        "typeAnnotation": null,
        "start": 59,
        "end": 67
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "text",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 77,
                "end": 83
              },
              "start": 75,
              "end": 83
            },
            "start": 71,
            "end": 83
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "pos",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 90,
                "end": 96
              },
              "start": 88,
              "end": 96
            },
            "start": 85,
            "end": 96
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "self",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Rule",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 104,
                  "end": 108
                },
                "typeArguments": null,
                "start": 104,
                "end": 108
              },
              "start": 102,
              "end": 108
            },
            "start": 98,
            "end": 108
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSUnionType",
            "types": [
              {
                "type": "TSNumberKeyword",
                "start": 113,
                "end": 119
              },
              {
                "type": "TSBooleanKeyword",
                "start": 122,
                "end": 129
              }
            ],
            "start": 113,
            "end": 129
          },
          "start": 110,
          "end": 129
        },
        "start": 70,
        "end": 129
      },
      "declare": false,
      "start": 54,
      "end": 130
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "FullRule",
        "optional": false,
        "typeAnnotation": null,
        "start": 141,
        "end": 149
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
              "name": "validate",
              "optional": false,
              "typeAnnotation": null,
              "start": 156,
              "end": 164
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 166,
                    "end": 172
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "RegExp",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 175,
                      "end": 181
                    },
                    "typeArguments": null,
                    "start": 175,
                    "end": 181
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Validate",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 184,
                      "end": 192
                    },
                    "typeArguments": null,
                    "start": 184,
                    "end": 192
                  }
                ],
                "start": 166,
                "end": 192
              },
              "start": 164,
              "end": 192
            },
            "accessibility": null,
            "static": false,
            "start": 156,
            "end": 193
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "normalize",
              "optional": false,
              "typeAnnotation": null,
              "start": 198,
              "end": 207
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "match",
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
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 219,
                              "end": 220
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 222,
                                "end": 228
                              },
                              "start": 220,
                              "end": 228
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 219,
                            "end": 228
                          }
                        ],
                        "start": 218,
                        "end": 229
                      },
                      "start": 216,
                      "end": 229
                    },
                    "start": 211,
                    "end": 229
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 234,
                    "end": 238
                  },
                  "start": 231,
                  "end": 238
                },
                "start": 210,
                "end": 238
              },
              "start": 208,
              "end": 238
            },
            "accessibility": null,
            "static": false,
            "start": 198,
            "end": 239
          }
        ],
        "start": 150,
        "end": 241
      },
      "declare": false,
      "start": 131,
      "end": 241
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Rule",
        "optional": false,
        "typeAnnotation": null,
        "start": 248,
        "end": 252
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSStringKeyword",
            "start": 255,
            "end": 261
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "FullRule",
              "optional": false,
              "typeAnnotation": null,
              "start": 264,
              "end": 272
            },
            "typeArguments": null,
            "start": 264,
            "end": 272
          }
        ],
        "start": 255,
        "end": 272
      },
      "declare": false,
      "start": 243,
      "end": 273
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
            "name": "obj",
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
                      "name": "field",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 287,
                      "end": 292
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Rule",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 294,
                          "end": 298
                        },
                        "typeArguments": null,
                        "start": 294,
                        "end": 298
                      },
                      "start": 292,
                      "end": 298
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 287,
                    "end": 298
                  }
                ],
                "start": 286,
                "end": 299
              },
              "start": 284,
              "end": 299
            },
            "start": 281,
            "end": 299
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "field",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 308,
                  "end": 313
                },
                "value": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "validate",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 325,
                        "end": 333
                      },
                      "value": {
                        "type": "ArrowFunctionExpression",
                        "expression": true,
                        "async": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "_t",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 336,
                            "end": 338
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "_p",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 340,
                            "end": 342
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "_s",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 344,
                            "end": 346
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "Literal",
                          "value": false,
                          "raw": "false",
                          "start": 351,
                          "end": 356
                        },
                        "id": null,
                        "generator": false,
                        "start": 335,
                        "end": 356
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 325,
                      "end": 356
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "normalize",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 366,
                        "end": 375
                      },
                      "value": {
                        "type": "ArrowFunctionExpression",
                        "expression": true,
                        "async": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "match",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 377,
                            "end": 382
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "match",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 386,
                            "end": 391
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 392,
                            "end": 393
                          },
                          "optional": false,
                          "computed": false,
                          "start": 386,
                          "end": 393
                        },
                        "id": null,
                        "generator": false,
                        "start": 377,
                        "end": 393
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 366,
                      "end": 393
                    }
                  ],
                  "start": 315,
                  "end": 400
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 308,
                "end": 400
              }
            ],
            "start": 302,
            "end": 402
          },
          "definite": false,
          "start": 281,
          "end": 402
        }
      ],
      "declare": false,
      "start": 275,
      "end": 403
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 54,
  "end": 403
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 54,
    "end": 58
  },
  {
    "type": "Identifier",
    "value": "Validate",
    "start": 59,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 68,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 70,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "text",
    "start": 71,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 75,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 77,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 83,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "pos",
    "start": 85,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 88,
    "end": 89
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 90,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 96,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "self",
    "start": 98,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 102,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "Rule",
    "start": 104,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 108,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 110,
    "end": 112
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 113,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 120,
    "end": 121
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 122,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 129,
    "end": 130
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 131,
    "end": 140
  },
  {
    "type": "Identifier",
    "value": "FullRule",
    "start": 141,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 150,
    "end": 151
  },
  {
    "type": "Identifier",
    "value": "validate",
    "start": 156,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 164,
    "end": 165
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 166,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 173,
    "end": 174
  },
  {
    "type": "Identifier",
    "value": "RegExp",
    "start": 175,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 182,
    "end": 183
  },
  {
    "type": "Identifier",
    "value": "Validate",
    "start": 184,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 192,
    "end": 193
  },
  {
    "type": "Identifier",
    "value": "normalize",
    "start": 198,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 207,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 208,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 210,
    "end": 211
  },
  {
    "type": "Identifier",
    "value": "match",
    "start": 211,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 216,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 218,
    "end": 219
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 219,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 220,
    "end": 221
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 222,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 228,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 229,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 231,
    "end": 233
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 234,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 238,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 240,
    "end": 241
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 243,
    "end": 247
  },
  {
    "type": "Identifier",
    "value": "Rule",
    "start": 248,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 253,
    "end": 254
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 255,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 262,
    "end": 263
  },
  {
    "type": "Identifier",
    "value": "FullRule",
    "start": 264,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 272,
    "end": 273
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 275,
    "end": 280
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 281,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 284,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 286,
    "end": 287
  },
  {
    "type": "Identifier",
    "value": "field",
    "start": 287,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 292,
    "end": 293
  },
  {
    "type": "Identifier",
    "value": "Rule",
    "start": 294,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "value": "{",
    "start": 302,
    "end": 303
  },
  {
    "type": "Identifier",
    "value": "field",
    "start": 308,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": ":",
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
    "type": "Identifier",
    "value": "validate",
    "start": 325,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 333,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 335,
    "end": 336
  },
  {
    "type": "Identifier",
    "value": "_t",
    "start": 336,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 338,
    "end": 339
  },
  {
    "type": "Identifier",
    "value": "_p",
    "start": 340,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 342,
    "end": 343
  },
  {
    "type": "Identifier",
    "value": "_s",
    "start": 344,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 346,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 348,
    "end": 350
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 351,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 356,
    "end": 357
  },
  {
    "type": "Identifier",
    "value": "normalize",
    "start": 366,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 375,
    "end": 376
  },
  {
    "type": "Identifier",
    "value": "match",
    "start": 377,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 383,
    "end": 385
  },
  {
    "type": "Identifier",
    "value": "match",
    "start": 386,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 391,
    "end": 392
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 392,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 393,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 399,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 401,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 402,
    "end": 403
  }
]
```
